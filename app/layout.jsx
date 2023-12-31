import "./globals.css";
import Topbar from "@/layout/Topbar";
import { IBM_Plex_Sans_Arabic, Cairo } from "next/font/google";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import { AppProvider } from "@/context/appContext";

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
        <AppProvider>
          <Topbar />
          <Navbar />
          <main className="min-h-[calc(100vh-135px-427px)] relative ">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
