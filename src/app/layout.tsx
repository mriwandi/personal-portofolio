import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PersonalInfo from "@/components/personal-info";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
        className={`${poppins.variable} font-poppins antialiased bg-stone-50`}
      >
        <main className="flex lg:flex-row flex-col gap-20 justify-center m-20 items-stretch">
          <aside className="sticky top-20 max-h-full h-full mb-0 bg-white lg:basis-1/4 md:basis-full rounded-2xl shadow-xl">
            <PersonalInfo />
          </aside>
          <div className="lg:basis-3/4 md:basis-full m-0 relative bg-white rounded-2xl shadow-xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
