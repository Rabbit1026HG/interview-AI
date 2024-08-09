"use client";

import CustomCursor from "@/app/ui/CustomCursor";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { SupabaseProvider } from "@/hooks/SupabaseContext";

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
  // <time datetime={Date.now} suppressHydrationWarning />;
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="author" content="Laralink" />
          <link rel="icon" href="/images/favicon.ico" sizes="any" />
          <title>Arino Creative Agency Next JS Template</title>
        </head>
        <body className={`${openSans.variable} ${poppins.variable}`}>
          <SupabaseProvider>
            <CustomCursor />
            {children}
          </SupabaseProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
