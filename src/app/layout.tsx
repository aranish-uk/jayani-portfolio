import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayani Gunda — Supply Chain, Data Analytics & Strategy",
  description:
    "Portfolio of Jayani Gunda — Senior at Arizona State University pursuing dual degrees in Business Data Analytics and Supply Chain Management, leveraging data to drive strategic decisions and optimize operations.",
  keywords: [
    "Jayani Gunda",
    "Supply Chain",
    "Data Analytics",
    "Strategy",
    "Leadership",
    "Portfolio",
  ],
  authors: [{ name: "Jayani Gunda" }],
  openGraph: {
    title: "Jayani Gunda — Supply Chain, Data Analytics & Strategy",
    description:
      "Senior at Arizona State University pursuing dual degrees in Business Data Analytics and Supply Chain Management, leveraging data to drive strategic decisions and optimize operations.",
    type: "website",
    locale: "en_US",
    siteName: "Jayani Gunda",
    url: "https://jayanigunda.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayani Gunda — Supply Chain, Data Analytics & Strategy",
    description:
      "Senior at Arizona State University pursuing dual degrees in Business Data Analytics and Supply Chain Management, leveraging data to drive strategic decisions and optimize operations.",
  },
  metadataBase: new URL("https://jayanigunda.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
