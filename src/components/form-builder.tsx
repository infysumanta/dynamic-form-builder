"use client";
import React, { useState } from "react";
import PreviewDialogBtn from "./preview-dialog-btn";
import SaveFormBtn from "./save-form-btn";
import PublishFormBtn from "./publish-form-btn";
import Designer from "./designer";
import { DndContext } from "@dnd-kit/core";
import DragOverlayWrappper from "./drag-overlay-wrappper";

const FormBuilder = () => {
  const [formPublished, setFormPublished] = useState(false);
  return (
    <DndContext>
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
        {/* height h-screen-60px */}

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
