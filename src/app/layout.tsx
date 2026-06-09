import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muniba Amjad | Web Developer + Bookkeeper",
  description: "I build professional websites and set up your bookkeeping — delivered together in 7 days.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}