import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React from "react";
import { SidebarBtnElementDragOverlay } from "./sidebar-btn-element";
import { ElementType, FormElements } from "./form-elements";

const DragOverlayWrappper = () => {
  const [draggedItem, setDraggedItem] = React.useState<Active | null>(null);

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

  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrappper;
