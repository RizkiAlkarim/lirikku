import "@/app/globals.css";
import Navbar from "@/components/navbar";

export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <section>
            <Navbar />
            {children}
        </section>
      );
    }    