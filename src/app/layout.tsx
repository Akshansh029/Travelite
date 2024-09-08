import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { neobrutalism } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
    >
      <html lang="en">
        <body
          className={`
        ${poppins.className}
        `}
        >
          <Toaster richColors position="top-center" />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

//         ${inter.className}
