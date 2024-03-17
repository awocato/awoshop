import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "awoshop",
  description: "Shop Websiste practice using Next.js",
};

export default function RootLayout({
  children,modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
    <div className="flex">
          {modal}
          {children}
    </div>
      </body>
    </html>
  );
}
