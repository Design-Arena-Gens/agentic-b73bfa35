import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Islamic Q&A Poster",
  description:
    "Elegant Islamic Q&A video poster layout for Instagram Reels with royal blue, gold, and white palette."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
