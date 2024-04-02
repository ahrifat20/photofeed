import Navbar from "@/components/header/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photofeed",
  description: "A Photo Feed a biggest gallary app in the bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container my-4 lg:my-8">{children}</div>
        <div id="modal-root-content" className="relative h-screen" />
      </body>
    </html>
  );
}
