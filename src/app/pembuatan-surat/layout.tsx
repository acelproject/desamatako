import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Pembuatan Surat",
  description: "Pembuatan Permohonan Surat",
};

export default function PermohonanSuratPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
