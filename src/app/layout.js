import { Geist, Geist_Mono } from "next/font/google";
import { Gulzar } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gulzar = Gulzar({
  weight: "400",
  variable: "--font-gulzar",
  subsets: ["arabic"],
});

export const metadata = {
  title: "دارالایمان والتقویٰ",
  description: "تحریک ایمان و تقویٰ کربوغہ شریف",
  icons: [
    {
      rel: "icon",
      url: "/logo.jpg",
      type: "image/jpeg",
    },
    {
      rel: "apple-touch-icon",
      url: "/logo.jpg",
      type: "image/jpeg",
    },
  ],
  links: [
    {
      rel: "preload",
      href: "/fonts/jnn.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl" className={gulzar.variable}>
      <head>
        <style>{`
          @font-face {
            font-family: 'Jameel Noori Nastaleeq';
            src: url('/fonts/jnn.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-gulzar antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
