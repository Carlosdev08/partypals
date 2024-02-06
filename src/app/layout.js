import { Outfit as NextOutfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
        {children}</body>
    </html>
  );
}
