import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muniba Amjad",
  description: "ACCA Candidate | QuickBooks ProAdvisor | Power BI Certified | Next.js Developer. Accountant by training. Developer by passion.",
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