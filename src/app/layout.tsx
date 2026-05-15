import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dana Ranch Ward",
  description: "Order of Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="h-full w-full m-0">{children}</body>
    </html>
  );
}
