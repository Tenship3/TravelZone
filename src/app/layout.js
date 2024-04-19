import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "TravelZone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
