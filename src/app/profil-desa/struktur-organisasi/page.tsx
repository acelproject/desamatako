import Image from "next/image";
import strukturOrganitation from "../../../../public/assets/img/struktur-organisasi.jpg";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function StrukturOrgns() {
  return (
    <>
      {/* <Head>
          <title>Profil Desa</title>
        </Head> */}
      <Navbar />

      <div className="bg-white py-32">
        <div className="w-full flex px-20 gap-10">
          <div className="w-full ">
            <h1 className="text-2xl font-bold text-gray-700 mb-10">
              STRUKTUR ORGANISASI
            </h1>
            <Image
              src={strukturOrganitation}
              alt="Map Desa"
              className="w-full mx-auto"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
