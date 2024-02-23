import { Outfit as NextOutfit } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Copyright from "@/components/Copyright";
import  Footer from "@/components/Footer";

const Outfit = NextOutfit({ subsets: ["latin"] });

export const metadata = {
  title: "PartyPals",
  description: "exciting family moments",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={Outfit.className}>
        <NavBar/>
        {children}
        <Footer/>
              <Copyright />
              </body>
             
    </html>
  );
}
