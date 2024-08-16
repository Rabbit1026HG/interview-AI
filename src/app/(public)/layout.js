"use client";

import Footer from "@/app/ui/Footer";
import Header from "../ui/Header";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
