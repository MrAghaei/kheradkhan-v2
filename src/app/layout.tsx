import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const iranSans = localFont({
  src: [
    {
      path: "../../public/fonts/IranSans.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "خرد خوان",
  description: "سایتی برای مدیریت و مرور هایلایت کتاب های شما.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white ${iranSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
