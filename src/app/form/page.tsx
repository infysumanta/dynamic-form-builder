// import FormSubmitComponent from "@/components/FormSubmitComponent";
import React from "react";
import { formData } from "@/lib/formData";
import { FormElementInstance } from "@/components/form-elements";
import FormSubmitComponent from "@/components/form-submit-component";
async function SubmitPage() {
  const formContent = formData as FormElementInstance[];

  return <FormSubmitComponent content={formContent} />;
}

export default SubmitPage;
