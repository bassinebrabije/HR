import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
export const metadata: Metadata = {
  title: "Slashr - Award-winning HR system for all of your HRIS needs",
  description: "Slashr ",
  icons: {
    icon: "/favicon.ico", // Correct way to set the favicon
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
