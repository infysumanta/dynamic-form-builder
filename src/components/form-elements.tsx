import React from "react";
import { TextFieldFormElement } from "./fields/text-fields";

export type ElementType = "TextField";

export type FormElement = {
  type: ElementType;
  construct: (id: string) => FormElementInstance;

  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };

  designerComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  formComponent: React.FC;
  propertiesComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
};

export type FormElementInstance = {
  id: string;
  type: ElementType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
