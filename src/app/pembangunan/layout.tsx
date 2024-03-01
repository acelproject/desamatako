// import AppSheel from "@/components/layouts/AppSheel/page";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Head from "next/head";
import React from "react";

export default function PembangunanPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Head>
        <title>Landing Page</title>
      </Head> */}

      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
