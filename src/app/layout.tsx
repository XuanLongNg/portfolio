import type {Metadata} from "next";
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
        <body style={{backgroundColor: 'var(--bg-primary)'}}>
        <NextThemeProvider>
            <MainLayout>{children}</MainLayout>
        </NextThemeProvider>
        </body>
        </html>
    );
}
