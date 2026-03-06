import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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

};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" dir="rtl">
      <head>
        <style>{`
          @font-face {
            font-family: 'Mehr';
            src: url('/fonts/mehrweb.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-feature-settings: 'liga', 'dlig', 'calt', 'ss01';
            -webkit-font-feature-settings: 'liga', 'dlig', 'calt', 'ss01';
          }
        `}</style>
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
