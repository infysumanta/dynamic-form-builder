"use client";
import React, { useEffect } from "react";
import { FormElementInstance, FormElements } from "./form-elements";
import { Button } from "./ui/button";
const FormSubmitComponent = ({
  content,
}: {
  content: FormElementInstance[];
}) => {
  return (
    <div className="flex justify-center w-full h-full items-center p-8">
      <div className="max-w-[800px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border shadow-sm shadow-gray-100 rounded ">
        {content.map((element) => {
          const FormComponent = FormElements[element.type].formComponent;
          return <FormComponent key={element.id} elementInstance={element} />;
        })}
        <Button className="mt-8">Submit</Button>
      </div>
    </div>
  );
};

export default FormSubmitComponent;
