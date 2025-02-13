import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Header from "./header";


export const metadata: Metadata = {
  title: "Slashr - Award-winning HR system for all of your HRIS needs",
  description: "Slashr is the best HR system to manage all your HRIS needs, including payroll, employee records, and performance tracking.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Slashr - HR System",
    description: "All-in-one HRIS software for efficient workforce management.",
    url: "https://www.slashr.com",
    siteName: "Slashr",
    images: [
      {
        url: "https://i.imghippo.com/files/vRLw1789Enw.png", // Your image
        width: 1200,
        height: 630,
        alt: "Slashr Dashboard Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slashr - HR System",
    description: "All-in-one HRIS software for efficient workforce management.",
    images: ["https://i.imghippo.com/files/vRLw1789Enw.png"], // Your image
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.slashr.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
