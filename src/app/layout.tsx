import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CommandTerminal from "@/components/CommandTerminal";
import SystemTelemetry from "@/components/SystemTelemetry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://abubakarxdev-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "Abu Bakar | Software Engineer & DevSecOps",
  description:
    "Professional portfolio of Abu Bakar. Full-Stack Systems Engineer specializing in secure REST APIs, serverless architectures, and enterprise system deployments.",
  keywords: [
    "Abu Bakar",
    "Software Engineer",
    "Backend Developer",
    "DevSecOps",
    "Next.js",
    "FastAPI",
    "PostgreSQL",
    "Systems Architecture",
  ],
  authors: [{ name: "Abu Bakar" }],
  creator: "Abu Bakar",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Abu Bakar | Software Engineer & DevSecOps",
    description:
      "Professional portfolio of Abu Bakar. Full-Stack Systems Engineer specializing in secure REST APIs, serverless architectures, and enterprise system deployments.",
    siteName: "Abu Bakar Portfolio",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Abu Bakar | Software Engineer & DevSecOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Bakar | Software Engineer & DevSecOps",
    description:
      "Professional portfolio of Abu Bakar. Full-Stack Systems Engineer specializing in secure REST APIs, serverless architectures, and enterprise system deployments.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-primary">
        <CommandTerminal />
        <SystemTelemetry />
        {children}
      </body>
    </html>
  );
}
