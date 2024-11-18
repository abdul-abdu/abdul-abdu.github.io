import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { KBar } from "@/providers";
import "./globals.css";

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
        <KBar>
          <Navbar />
          <section className="mx-auto max-w-7xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <main className="mb-auto my-5">{children}</main>
          </section>
          <Footer />
        </KBar>
      </body>
    </html>
  );
}
