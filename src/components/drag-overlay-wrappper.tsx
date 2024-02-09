import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React from "react";
import { SidebarBtnElementDragOverlay } from "./sidebar-btn-element";
import { ElementType, FormElements } from "./form-elements";
import useDesigner from "./hooks/useDesigner";

const DragOverlayWrappper = () => {
  const [draggedItem, setDraggedItem] = React.useState<Active | null>(null);

  const { elements } = useDesigner();

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: (event) => {
      setDraggedItem(null);
    },
    onDragEnd: (event) => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No Drag Overlay</div>;

  const isSideBarBtnElement = draggedItem?.data?.current?.isDesignerBtnElement;

  if (isSideBarBtnElement) {
    const type = draggedItem?.data?.current?.type as ElementType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }

  const isDesignerElement = draggedItem?.data?.current?.isDesignerElement;

  if (isDesignerElement) {
    const elementId = draggedItem.data?.current?.elementId;
    const element = elements.find((el) => el.id === elementId);
    if (!element) node = <div>Element not found!</div>;
    else {
      const DesignerElementComponent =
        FormElements[element.type].designerComponent;

      node = (
        <div className="flex bg-accent border rounded-md h-[120px] w-full py-2 px-4 opacity-60 pointer pointer-events-none">
          <DesignerElementComponent elementInstance={element} />
        </div>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrappper;
