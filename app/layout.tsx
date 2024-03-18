import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Message_dd from "./components/DropDown";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Linkedin Profile Page",
  description: "Basak's interview question...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex">
          <NavBar></NavBar>
          <main>{children}</main>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
