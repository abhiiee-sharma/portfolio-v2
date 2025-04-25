import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Abhishek Sharma | Software Engineer",
  description: "Software Engineer who builds accessible, pixel-perfect digital experiences for the web.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
