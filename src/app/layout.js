"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
// import CustomCursor from "@/app/ui/CustomCursor";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { SupabaseProvider } from "@/hooks/SupabaseContext";
import NextTopLoader from "nextjs-toploader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "jotai";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="author" content="Laralink" />
          <link rel="icon" href="/images/favicon.ico" sizes="any" />
          <title>Interviewaisim</title>
        </head>
        <body className={`${openSans.variable} ${poppins.variable}`}>
          <SupabaseProvider>
            <NextTopLoader />
            {/* <CustomCursor /> */}
            <ToastContainer limit={5} />
            <Provider>{children}</Provider>
          </SupabaseProvider>
        </body>
        <GoogleAnalytics gaId="G-7416E1F183" />
      </html>
    </ClerkProvider>
  );
}
