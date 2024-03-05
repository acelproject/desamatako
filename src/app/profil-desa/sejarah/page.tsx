import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import mapSketch from "../../../../public/assets/img/map-desa.jpg";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import SketsaImg from "./sketsaImg/page";

const dataKepalaDesa = [
  {
    nama: "PEDENGKA",
    masaJabatan: "Tahun 1901-1903",
    bg: "bg-gray-100",
  },
  {
    nama: "TIMBALINO",
    masaJabatan: "Tahun 1903-1906",
    bg: "bg-white",
  },
  {
    nama: "PEDENGKA",
    masaJabatan: "Tahun 1906-1909",
    bg: "bg-gray-100",
  },
  {
    nama: "TIMBALINO",
    masaJabatan: "Tahun 1909-1912",
    bg: "bg-white",
  },
  {
    nama: "WONCE",
    masaJabatan: "Tahun 1912-1922",
    bg: "bg-gray-100",
  },
];

export default function History() {
  return (
    <>
      <Navbar />
      <div className="bg-white py-32">
        <div className="w-full flex px-20 gap-10 mt-4">
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
            <p className="text-gray-600 text-md w-full text-justify">
              Dr. Albert Cruit menghimbau dan memohon agar semua warga
              masyarakat yang hidup terpencar dan berkelompok di daerah
              perbukitan untuk turun ke daerah dataran rendah wilayah pantai
              untuk membuat pemukiman yang disebut kampoeng (Kampung), dengan
              Kepala Kampung pertama “PEDENGKA”. Seorang kepala suku yang
              diangkat oleh masyarakat sebagai “KABOSENYA” (Kabosenya
              Katundana), dengan luas wilayah kerja dari GALUGA sampai TONGKO.
            </p>
            <br />
            <p className="text-gray-600 text-md w-full text-justify">
              Pada Tahun 1933 oleh pemerintah Belanda, Desa Matako dimekerkan
              menjadi 2 (dua) Desa yakni Matako A (yang sekarang dikenal dengan
              Desa Malei Tojo) dan Matako B (yakni Desa Matako
              yang sekarang ini).
            </p>
            <br />
            <p className="text-gray-600 text-md w-full text-justify">
              Dalam perkembangan pemerintahan selanjutnya Desa Matako telah
              dipimpin oleh kepala-kepala kampung / desa sebagai berikut :
            </p>
          </div>
          <div className="w-[30%] border-solid border  border-primary px-4 pt-16 pb-4 rounded-md overflow-hidden relative">
            <div className="absolute bg-primary px-5 py-3 top-0 left-0 w-full font-semibold flex items-center gap-1">
              <FaMapMarkerAlt />
              <div>PETA DESA</div>
            </div>
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127629.79503742418!2d120.85743294437972!3d-1.5109398448151872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8f019742ba0349%3A0x6d677fdf8a51c38a!2sMatako%2C%20Kec.%20Tojo%20Bar.%2C%20Kabupaten%20Tojo%20Una-Una%2C%20Sulawesi%20Tengah!5e0!3m2!1sid!2sid!4v1704871857696!5m2!1sid!2sid"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-14 w-full py-5 ">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5  ">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
              <div className="overflow-hidden ">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Nama
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Masa Jabatan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataKepalaDesa.map((data,i) => (
                      <tr className={`${data.bg} border-b`} key={i}>
                        <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          {data.nama}
                        </td>
                        <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          {data.masaJabatan}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-20 gap-10 mt-5 ">
          <p className="text-gray-600 text-md w-full text-justify">
            Desa Matako terletak di : <br />
            16 Km ke Ibu Kota Kecamatan – Tombiano <br />
            130 Km ke Ibu Kota Kabupaten – Ampana <br />
            232 Km ke Ibu Kota Provinsi – Palu <br /> 27 Km ke
            Kota terdekat - Poso
          </p>
          <br />
          <p className="text-gray-600 text-md w-full text-justify">
            Desa Matako di diami oleh 12 suku dan 2 etnis, dan terdiri dari
            penganut agama Islam dan Kristen yakni + 30% Muslim dan
            + 70% Kristiani.
          </p>
          <br />
          <p className="text-gray-600 text-md w-full text-justify">
            Desa Matako terletak berbatasan dengan : <br />
            Timur dengan Desa Bambalo Barat dengan Desa Malei Tojo <br />
            Utara dengan Laut / Teluk Tomini <br /> Selatan dengan Hutan Negara
            / Pegunungan Kabupaten Morowali
          </p>
          <br />
          <p className="text-gray-600 text-md w-full text-justify">
            Luas wilayah Desa Matako adalah + 9000 ha. Desa Matako terdiri dari
            6 (enam) dusun yang selama ini di kenal dengan dusun 1 s/d 6
          </p>
          <br />
          <p className="text-gray-600 text-md w-full text-justify">
            Jumlah Penduduk Desa Matako adalah: <br />
            1. 742 KK <br />
            2. 2.347 Jiwa <br />
            3. 1.237 Laki-Laki <br />
            4. 1.110 Perempuan <br />
            Mata pencarian Masyarakat Desa pada umumnya adalah Petani / Pekebun.
            Sebagian lagi adalah Nelayan, PNS dan Wiraswasta.
          </p>
        </div>
        <SketsaImg/>
        <div className="w-full px-20 gap-10 mt-10 ">
          <p className="text-gray-600 text-md w-full text-justify">
            Unsur-Unsur Lembaga dan Organisasi yang ada yaitu : <br />
            1. Pemerintah Desa <br />
            2. PKK <br />
            3. BPD <br />
            4. KPMD <br />
            5. LPM <br />
            6. Hansip <br />
            7. Lembaga Adat <br />
            8. Karang Taruna <br />
            9. Wia <br />
            10. Risma <br />
            11. Organisasi Pemuda Kristen <br />
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
