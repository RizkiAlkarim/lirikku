import "@/app/globals.css";
import { Inter } from "next/font/google";
import Navbar from "./editor/_components/navbar";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Editor",
  description: "Create and share your version lyric",
};

export default async function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
      );
    }    