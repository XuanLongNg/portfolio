"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export default function NextThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="data-theme">{children}</ThemeProvider>
    </>
  );
}
