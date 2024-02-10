"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FormElementInstance, FormElements } from "./form-elements";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { HiCursorClick } from "react-icons/hi";
import { ImSpinner2 } from "react-icons/im";
const FormSubmitComponent = ({
  content,
}: {
  content: FormElementInstance[];
}) => {
  const formValues = useRef<{ [key: string]: string }>({});
  const formErrors = useRef<{ [key: string]: boolean }>({});
  const [renderKey, setRenderKey] = useState(new Date().getTime());

  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const vaiidateForm = useCallback(() => {
    for (const field of content) {
      const actualField = formValues.current[field.id] || "";
      const valid = FormElements[field.type].validate(field, actualField);
      if (!valid) {
        formErrors.current[field.id] = true;
      }
    }

    if (Object.keys(formErrors.current).length > 0) {
      return false;
    }
    return true;
  }, [content]);

  const submitValue = useCallback((key: string, values: string) => {
    formValues.current[key] = values;
  }, []);

  const submitForm = async () => {
    formErrors.current = {};
    const validForm = vaiidateForm();
    if (!validForm) {
      setRenderKey(new Date().getTime());
      toast.error("Please fill in all required fields.");
      return;
    }
    console.log(formValues.current);
  };

  return (
    <div className="flex justify-center w-full h-full items-center p-8">
      <div
        key={renderKey}
        className="max-w-[800px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border shadow-sm shadow-gray-100 rounded "
      >
        {content.map((element) => {
          const FormComponent = FormElements[element.type].formComponent;
          return (
            <FormComponent
              key={element.id}
              elementInstance={element}
              submitValue={submitValue}
              isInvalid={formErrors.current[element.id]}
              defaultValue={formValues.current[element.id]}
            />
          );
        })}
        <Button className="mt-8" onClick={submitForm} disabled={pending}>
          {!pending && (
            <>
              <HiCursorClick className="mr-2" />
              Submit
            </>
          )}

          {pending && (
            <>
              <ImSpinner2 className="animate-spin" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default FormSubmitComponent;
