import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HealthTalk AI",
  description:
    "AI-powered healthcare consultation application using speech recognition and text-to-speech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
