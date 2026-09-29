import type { Metadata } from "next";
import { Source_Sans_3, Oswald, Geist_Mono } from "next/font/google";
import "./globals.css";

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MMC | Megatekton Manufacturing Corporation",
  description:
    "Megatekton Manufacturing Corporation (MMC): manufacturing, warehousing and supply chain services, delivered with automation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${source.variable} ${oswald.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}