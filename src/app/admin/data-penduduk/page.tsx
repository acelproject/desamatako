import TableWrapper from "@/components/elements/table/TableWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTh from "@/components/elements/table/TableTh";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import Link from "next/link";

const dataPenduduk = [
  {
    id: 1,
    // ak: "kosong",
    // kk: "kosong",
    // ddk: "kosong",
    idKel: "lumimpah123",
    kepalaKeluarga: "Yohanes Marchel",
    alamat: "kosong",
    rw: "kosong",
    rt: "kosong",
    dusun: "Dusun 8",
    bulan: "maret",
    tahun: "2024",
    pengisi: "ksong",
    pekerjaan: "petani",
    jabatan: "kosong",
    sumberData: "kosong",
  },
  {
    id: 2,
    // ak: "kosong",
    // kk: "kosong",
    // ddk: "kosong",
    idKel: "suge55",
    kepalaKeluarga: "Andreas Suge",
    alamat: "kosong",
    rw: "kosong",
    rt: "kosong",
    dusun: "Dusun 8",
    bulan: "maret",
    tahun: "2024",
    pengisi: "ksong",
    pekerjaan: "petani",
    jabatan: "kosong",
    sumberData: "kosong",
  },
];

export default function DataPendudukAdmin() {
  return (
    <>
      <div className="w-full px-7 mb-6">
        <h1 className="text-2xl font-semibold">Data Dasar Keluarga</h1>
      </div>
      <div className="w-ful mx-6 mt-2">
        <TableWrapper tableTitle="Table Data Dasar Keluarga" href="/admin/data-penduduk/tambah-data">
          <TableThead>
            <TableTh>No</TableTh>
            <TableTh>AK</TableTh>
            <TableTh>kk</TableTh>
            <TableTh>ddk</TableTh>
            <TableTh>kode keluarga</TableTh>
            <TableTh>nama kepala keluarga</TableTh>
            <TableTh>alamat</TableTh>
            <TableTh>rw</TableTh>
            <TableTh>rt</TableTh>
            <TableTh>dusun</TableTh>
            <TableTh>bulan</TableTh>
            <TableTh>tahun</TableTh>
            <TableTh>nama pengisi</TableTh>
            <TableTh>pekerjaan</TableTh>
            <TableTh>jabatan</TableTh>
            <TableTh>sumber data</TableTh>
          </TableThead>
          {dataPenduduk.map((data, i) => (
            <TableTbody key={i}>
              <TableTd>{data.id}</TableTd>
              <TableTd>
                <Link
                  href={`/admin/data-penduduk/${i}/${data.idKel}`}
                  className="text-xl text-green-600 "
                >
                  <HiMiniUsers />
                </Link>
              </TableTd>
              <TableTd>
                <Link
                  href={`/admin/data-penduduk/${i}/${data.idKel}`}
                  className="text-xl text-yellow-500 "
                >
                  <FaPencil />
                </Link>
              </TableTd>
              <TableTd>
                <Link
                  href={`/admin/data-penduduk/${i}/${data.idKel}`}
                  className="text-xl text-blue-600"
                >
                  <BsDatabaseFillCheck />
                </Link>
              </TableTd>
              <TableTd>{data.idKel}</TableTd>
              <TableTd>{data.kepalaKeluarga}</TableTd>
              <TableTd>{data.alamat}</TableTd>
              <TableTd>{data.rw}</TableTd>
              <TableTd>{data.rt}</TableTd>
              <TableTd>{data.dusun}</TableTd>
              <TableTd>{data.bulan}</TableTd>
              <TableTd>{data.tahun}</TableTd>
              <TableTd>{data.pengisi}</TableTd>
              <TableTd>{data.pekerjaan}</TableTd>
              <TableTd>{data.jabatan}</TableTd>
              <TableTd>{data.sumberData}</TableTd>
            </TableTbody>
          ))}
        </TableWrapper>
      </div>
    </>
  );
}
