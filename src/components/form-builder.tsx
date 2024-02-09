"use client";
import React, { useEffect, useState } from "react";
import PreviewDialogBtn from "./preview-dialog-btn";
import SaveFormBtn from "./save-form-btn";
import PublishFormBtn from "./publish-form-btn";
import Designer from "./designer";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import DragOverlayWrappper from "./drag-overlay-wrappper";
import useDesigner from "./hooks/useDesigner";
import { ImSpinner2 } from "react-icons/im";
import { formData } from "@/lib/formData";
import { FormElementInstance } from "./form-elements";

const FormBuilder = () => {
  const [formPublished, setFormPublished] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { setElements, setSelectedElement } = useDesigner();

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    if (isReady) return;
    const elements = formData as FormElementInstance[];
    setElements(elements);
    setSelectedElement(null);
    const readyTimeout = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(readyTimeout);
  }, [setElements, isReady, setSelectedElement]);

  if (!isReady) {
    return (
      <main className="flex flex-col w-full h-screen">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <ImSpinner2 className="animate-spin h-12 w-12" />
        </div>
      </main>
    );
  }

  return (
    <DndContext sensors={sensors}>
      <main className="flex flex-col w-full">
        <nav className="flex justify-between border-b-2 p-4 gap-3 items-center h-[60px]">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            Form Name
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogBtn />
            {!formPublished && (
              <>
                <SaveFormBtn />
                <PublishFormBtn />
              </>
            )}
          </div>
        </nav>
        <div
          className="flex w-full flex-grow items-center justify-center relative overflow-y-auto  bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <Designer />
        </div>
      </main>
      <DragOverlayWrappper />
    </DndContext>
  );
};

export default FormBuilder;
