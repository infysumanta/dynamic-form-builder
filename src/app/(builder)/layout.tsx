import React from "react";

const FormBuilderLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full flex-grow mx-auto">{children}</div>;
};

export default FormBuilderLayout;
