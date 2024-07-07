import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goutham Ananda - Portfolio",
  description: "Goutham Ananda's Portfolio Website",
  icons: {
    icon: [
      { url: "assets/icons/favicon.ico", type: "image/x-icon" },
      {
        url: "assets/icons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "assets/icons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "assets/icons/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "assets/icons/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: { url: "assets/icons/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    type: "website",
    url: "https://www.aerospacestress.com/",
    title: "Goutham Ananda - Portfolio",
    description: "Goutham Ananda's Portfolio Website",
    images: [
      {
        url: "assets/img/preview.png",
        alt: "Goutham Ananda's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.aerospacestress.com/",
    title: "Goutham Ananda - Portfolio",
    description: "Goutham Ananda's Portfolio Website",
    images: "assets/img/preview.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.aerospacestress.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
