"use client";

import Footer from "@/app/ui/Footer";
import PrivateHeader from "../ui/Header/PrivateHeader";

export default function PrivateLayout({ children }) {
  return (
    <>
      <PrivateHeader />
      {children}
      <Footer />
    </>
  );
}
