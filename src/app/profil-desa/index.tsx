import Image from "next/image";
import Head from "next/head";
import { FaMapMarkerAlt } from "react-icons/fa";
// import PagesWrapper from "../components/layouts/PagesWrapper";

export default function ProfilDesa() {
  return (
    <>
      {/* <Head>
        <title>Profil Desa</title>
      </Head> */}

        <div className="w-full flex px-20 gap-10">
          <div className="w-[70%] ">
            <h1 className="text-2xl font-bold text-gray-700 mb-2">SEJARAH</h1>
            <p className="text-gray-600 text-md text-justify">
              Desa Matako resmi dibentuk untuk ditetapkan sebagai desa
              (Kampoeng) pada tahun 1901, oleh{" "}
              <span className="font-semibold">Dr. Albert Cruit</span> seorang
              utusan Cending / Gereja dari Belanda. Desa / Kampoeng tersebut
              diberi nama <span className="font-semibold">MANTAKO</span> yang
              artinya <span className="font-semibold">MENGUNJUNGI</span> atau
              hendak mengunjungi. Dan seiring berjalannya waktu, maka penyebutan
              Mantako tersebut berubah menjadi{" "}
              <span className="font-semibold">MATAKO</span>, dan sebutan
              tersebut melekat hingga sekarang.
            </p>
            <br />
          </div>
        </div>
    </>
  );
}
