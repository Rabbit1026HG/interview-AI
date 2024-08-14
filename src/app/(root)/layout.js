"use client";

import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";

import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
