// import AppSheel from "@/components/layouts/AppSheel/page";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Head from "next/head";
import React from "react";

export default function ApdPageLayout({
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
        <p className="mt-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eligendi quibusdam ea earum atque dolore voluptatum, vero ducimus
          facilis expedita ut nulla et hic, alias repellendus dolor cumque
          debitis deserunt natus impedit maiores consequatur molestiae adipisci
          laudantium. Sint, quam ad praesentium quis exercitationem maxime
          tempora aspernatur laboriosam, corrupti magni velit.
        </p>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
