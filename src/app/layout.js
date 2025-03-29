import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "EarthFokus - Smart Water Solutions",
  description: "EarthFokus provides smart water management solutions for sustainable future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${raleway.variable} antialiased bg-[#ffffff]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
