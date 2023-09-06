import "./globals.css";
import Topbar from "@/layout/Topbar";
import { IBM_Plex_Sans_Arabic, Cairo } from "next/font/google";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

const ibm = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "النائب/ مريم الظاعن",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${ibm.className} text-black`}>
        <Topbar />
        <Navbar />
        <div className="min-h-screen relative">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
