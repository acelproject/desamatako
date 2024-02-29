// import BgTitle from "@/pages/components/elements/BgTitle";
// import ViewMoreBtn from "@/pages/components/fragments/ViewMoreBtn";

import BgTitle from "@/components/elements/BgTitle";
import ViewMoreBtn from "@/components/fragments/ViewMoreBtn";


export default function History() {
  return (
    <div className="bg-white relative text-gray-700 py-20 text-center">
      <div className="w-7/12  mx-auto ">
        <BgTitle text={`Sejarah`} />

        <p className="text-xl mt-10">
          Desa Matako resmi dibentuk untuk ditetapkan sebagai desa (Kampoeng)
          pada tahun 1901, oleh Dr. Albert Cruit seorang utusan Cending / Gereja
          dari Belanda. Desa / Kampoeng tersebut diberi nama MANTAKO yang
          artinya MENGUNJUNGI atau hendak mengunjungi. Dan seiring berjalannya
          waktu, maka penyebutan Mantako tersebut berubah menjadi MATAKO, dan
          sebutan tersebut melekat hingga sekarang.
        </p>
      </div>
      <div className="w-7/12  mx-auto  mt-6">
        <ViewMoreBtn href={`/profil-desa/sejarah`}/>
      </div>
    </div>
  );
}
