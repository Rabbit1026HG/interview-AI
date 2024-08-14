"use client";

import Footer from "@/app/ui/Footer";
import PublicHeader from "@/app/ui/Header/PublicHeader";

export default function PublicLayout({ children }) {
  return (
    <>
      <PublicHeader />
      {children}
      <Footer />
    </>
  );
}
