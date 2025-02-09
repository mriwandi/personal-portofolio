import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import PersonalInfo from "@/components/personal-info";
import Navbar from "@/components/navbar";

const outfit = Outfit({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Muhammad Riwandi - Software Engineer",
  description: "Personal website of Muhammad Riwandi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased bg-zinc-900 text-zinc-100`}
      >
        <div className="flex justify-center mt-5">
          <Navbar />
        </div>
        <main className="flex lg:flex-row flex-col gap-20 justify-center my-20 m-[180px] items-stretch">
          <aside className="sticky top-20 max-h-full h-full mb-0 bg-zinc-800 lg:basis-1/4 md:basis-full rounded-2xl">
            <PersonalInfo />
          </aside>
          <div className="lg:basis-3/4 md:basis-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
