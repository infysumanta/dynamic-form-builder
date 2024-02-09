"use client";

import { ElementType, FormElement } from "../form-elements";
import { MdTextFields } from "react-icons/md";
const type: ElementType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text Field",
      helperText: "Helper Text",
      required: false,
      placeholder: "Value here...",
    },
  }),
  designerBtnElement: {
    label: "Text Field",
    icon: MdTextFields,
  },
  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};
