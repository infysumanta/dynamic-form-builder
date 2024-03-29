import Logo from "@/components/logo";
import ThemeSwitcher from "@/components/theme-switcher";
import React from "react";

const FormBuilderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <ThemeSwitcher />
      </nav>
      <div className="flex w-full flex-grow mx-auto">{children}</div>
    </div>
  );
};

export default FormBuilderLayout;
