import React from "react";
import SidebarBtnElement from "./sidebar-btn-element";
import { FormElements } from "./form-elements";
import { Separator } from "@radix-ui/react-separator";

const FormElementSidebar = () => {
  return (
    <div>
      <p className="tex-sm text-foreground/70">Drag and drop elements</p>
      <Separator className="my-2" />

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3">
        <SidebarBtnElement formElement={FormElements.TitleField} />
        <SidebarBtnElement formElement={FormElements.TextField} />
      </div>
    </div>
  );
};

export default FormElementSidebar;
