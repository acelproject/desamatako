import AdminWrapper from "../../AdminWrapper";
import { useRouter } from "next/router";
import DetailSuratHibahView from "../DetailSuratHibahView/DetailSuratHibahView";
import DetailSuratJualBeliView from "../DetailSuratJualBeliView";
import Link from "next/link";

type DetailSuratProps = {
  params: { slug: string };
};

const surat = [
  {
    id: 1,
    nama: "Andreas Suge",
    nik: "2737346649947",
    jenisSurat: "Surat Keterangan Nikah",
    noWA: 6282233534544,
    alamat: "Dusun 1",
    ktp: "gambar",
    dokHibah: "pdf",
    blangkoPajak: "pdf",
    pihakHibah: {
      ktp: "ktp",
    },
  },
  {
    id: 2,
    nama: "Marchel Lumimpah",
    jenisSurat: "Surat Keterangan Usaha",
    jenisUsaha: "toko",
  },
];

export default function AdminDetailPermohonanSurat(props: DetailSuratProps) {
  const { params } = props;
  console.log(params);
  return (

      <>
      <div className="w-full px-7 text-center">
        <h1 className="text-2xl font-semibold text-slate-800">
          Detail Surat Masuk
        </h1>
      </div>
      <div className="flex justify-center items-center mt-4  ">
        <div className="w-7/12 bg-white shadow-lg border-b border-b-slate-200 relative rounded-md overflow-hidden">
          <div className="w-full bg-primary rounded-t-sm">
            <h1 className="text-xl font-semibold text-white py-2 px-4 ">
              Surat Masuk
            </h1>
          </div>
          <div className="p-5 pb-5 border border-slate-100">
            {params.slug[0] === "1" && (
              <>
                <DetailSuratHibahView data={surat} />
              </>
            )}
            {params.slug[0] === "2" && <DetailSuratJualBeliView data={surat} />}
            <div
              className="flex justify-between mt-8 font-medium text-white text-sm border-t 
            border-slate-200 pt-4"
            >
              <Link
                href={`/admin/permohonan-surat`}
                className="bg-slate-500 px-2 py-1 rounded-sm"
              >
                Kembali
              </Link>
              <Link href={`/admin/permohonan-surat`} className="bg-primary px-2 py-1 rounded-sm">Proses</Link>
            </div>
          </div>
        </div>
      </div>
      </>

  );
}
