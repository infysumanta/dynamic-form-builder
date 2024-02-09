// import FormSubmitComponent from "@/components/FormSubmitComponent";
import React from "react";
import { formData } from "@/lib/formData";
import { FormElementInstance } from "@/components/form-elements";
async function SubmitPage() {
  const formContent = formData as FormElementInstance[];

  //   return <FormSubmitComponent content={formContent} />;
  return <></>;
}

export default SubmitPage;
