"use client";

import React, { createContext } from "react";
import { FormElementInstance } from "../form-elements";

type DesignerContextType = {
  elements: FormElementInstance[];
  addElement: (index: number, element: FormElementInstance) => void;
  setElements: React.Dispatch<React.SetStateAction<FormElementInstance[]>>;
  removeElement: (id: string) => void;
  updateElement: (id: string, element: FormElementInstance) => void;
  selectedElement: FormElementInstance | null;
  setSelectedElement: React.Dispatch<
    React.SetStateAction<FormElementInstance | null>
  >;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [elements, setElements] = React.useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedElement] =
    React.useState<FormElementInstance | null>(null);
  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElement = [...prev];
      newElement.splice(index, 0, element);
      return newElement;
    });
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  const updateElement = (id: string, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements.findIndex((e) => e.id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        setElements,
        addElement,
        removeElement,
        selectedElement,
        setSelectedElement,
        updateElement,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
