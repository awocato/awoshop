import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "awoshop",
  description: "Shop Websiste practice using Next.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://i.postimg.cc/m2w5CWPy/awoshop.png",
        alt: "awoshop",
      },
    ],
  },
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
