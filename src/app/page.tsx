import React from "react";
import AppWrapper from "./AppWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page Desa Matako",
  description:
    "Website Pemerintah Desa Matako, Kabupaten Tojo una-una, Kecamatan Tojo Barat.",
  authors: [{ name: "Pemerintah Desa Matako", url: "http://localhost:3000/" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Landing Page Desa Matako",
  },
};

const page = () => {
  return (
    <>
      <AppWrapper />
    </>
  );
};

export default page;
