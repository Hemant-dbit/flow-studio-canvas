import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionWrapper } from "@/components/SessionWrapper"; // 👈 You will create this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowStudio",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
