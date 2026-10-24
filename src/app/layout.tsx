import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muniba Amjad",
  description: "ACCA Candidate | QuickBooks ProAdvisor | Power BI Certified | Next.js Developer. Accountant by training. Developer by passion.",
  openGraph: {
    title: "Muniba Amjad — Finance × Technology",
    description: "ACCA Candidate · QuickBooks ProAdvisor · Power BI Certified · Next.js Developer. Accountant by training. Developer by passion.",
    url: "https://munibaamjad.vercel.app",
    siteName: "Muniba Amjad",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muniba Amjad — Finance × Technology Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muniba Amjad — Finance × Technology",
    description: "ACCA Candidate · QuickBooks ProAdvisor · Power BI Certified · Next.js Developer.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
