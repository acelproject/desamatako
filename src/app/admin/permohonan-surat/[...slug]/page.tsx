"use client";

import { useRouter } from "next/navigation";
import AdminWrapper from "../../AdminWrapper";

import DetailSuratHibahView from "../DetailSuratHibahView/DetailSuratHibahView";
import DetailSuratJualBeliView from "../DetailSuratJualBeliView";
import Link from "next/link";
import useSWR from "swr";
import { useEffect, useState } from "react";

type DetailSuratProps = {
  params: { slug: string };
};

// const surat = [
//   {
//     id: 1,
//     nama: "Andreas Suge",
//     nik: "2737346649947",
//     jenisSurat: "Surat Keterangan Nikah",
//     noWA: 6282233534544,
//     alamat: "Dusun 1",
//     ktp: "gambar",
//     dokHibah: "pdf",
//     blangkoPajak: "pdf",
//     pihakHibah: {
//       ktp: "ktp",
//     },
//   },
//   {
//     id: 2,
//     nama: "Marchel Lumimpah",
//     jenisSurat: "Surat Keterangan Usaha",
//     jenisUsaha: "toko",
//   },
// ];
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AdminDetailPermohonanSurat(props: DetailSuratProps) {
  const { params } = props;
  const router=useRouter()
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/surat-masuk/${params.slug[0]}`,
    fetcher
  );
  const detailSuratMasuk: any = { data: data?.detailSuratMasuk };
  console.log(detailSuratMasuk);

  const[newStatus,setNewStatus]=useState("")


  

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/surat-masuk/${params.slug[0]}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json.slip.advice);
        setNewStatus("diproses");
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleProses = async (e: any) => {
    e.preventDefault();
    const res = {
      newStatus:newStatus,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/surat-masuk/${params.slug[0]}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(res),
        }
      );
      if (!response.ok) {
        throw new Error("Gagal Mengedit Data!");
      }
      window.location.reload();
      router.back();
    } catch (error) {
      console.log(error);
    }
  };
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
            {params.slug[1] === "hibah" && (
              <>
                <DetailSuratHibahView data={detailSuratMasuk} />
              </>
            )}
            {params.slug[1] === "jual_beli" && (
              <DetailSuratJualBeliView data={detailSuratMasuk} />
            )}
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
              <button
                className="bg-primary px-2 py-1 rounded-sm"
                onClick={handleProses}
              >
                Proses
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
