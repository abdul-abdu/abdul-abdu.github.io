import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sleek Templates",
  description: "Sleek Templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <Navbar />
        <section className="mx-auto max-w-7xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <main className="mb-auto">{children}</main>
        </section>
        <Footer />
      </body>
    </html>
  );
}
