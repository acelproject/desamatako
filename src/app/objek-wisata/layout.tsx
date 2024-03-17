
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import React from "react";

export default function ApdPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      <div>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </>
  );
}
