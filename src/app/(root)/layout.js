"use client";

import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
}
