import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";
import Navbar from "@/components/Navbar";

// Importing both Inter and Poppins fonts
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] }); // You can customize the font weights

export const metadata: Metadata = {
  title: "Travelite",
  description: "AI travel partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${inter.className} 
        ${poppins.className}
      `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
