import "@/public/styles/style.scss";
import CustomCursor from "@/ui/CustomCursor";
import ScrollToTop from "@/ui/ScrollToTop";
import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import {GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--poppins-font",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--open-sans-font",
});

export const metadata: Metadata = {
  title: "Piforex - Foreign Currency Exchange & International Money Transfer Services Around Hyderabad, Telangana",
  description: "Piforex Offers The Best Foreign Currency Exchange, International Money Transfer in a convenient way with doorstep delivery Around Hyderabad, Telangana.",
  keywords:"international money transfer from Hyderabad, purchase currency notes at the best rates, Best foreign currency exchange in hyderabad, visa assistance for students, membership servies for students"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable}`}>
        
        {children}

        <CustomCursor />
        <ScrollToTop />        
        <GoogleTagManager gtmId="GTM-TGB9LC8H" />
        <GoogleAnalytics gaId="G-ZHX7VQSL2R" />
        
      </body>
    </html>
  );
}
