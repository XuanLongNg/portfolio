import type { Metadata } from "next";
import MainLayout from "@/layout/main-layout/MainLayout";
import NextThemeProvider from "@/common/providers/next-theme.provider";
import "./global.css";

export const metadata: Metadata = {
  title: "Neil Portfolio",
  description: "Some summary about me",
  icons: "/neil-logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <NextThemeProvider>
          <MainLayout>{children}</MainLayout>
        </NextThemeProvider>
      </body>
    </html>
  );
}
