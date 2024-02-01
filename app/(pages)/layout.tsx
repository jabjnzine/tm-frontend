"use client";
import "../globals.css";
import { Layout } from "@/components/layout";
// import { ThemeProvider } from "next-themes";
// import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <SessionProvider>
    <Layout>{children}</Layout>
    // </SessionProvider>
  );
}
