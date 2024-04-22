import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-red-500">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}