import TableWrapper from "@/components/elements/table/TableWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTh from "@/components/elements/table/TableTh";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import Link from "next/link";

const dataPenduduk = [
  {
    id: 1,
    idKel:"lumimpah123",
    nama: "Yohanes Marchel",
    nik: "720118054100001",
    tempat: "Dusun 8",
    ttl: "Palu,11 maret 2000",
    umur: 16,
    kelamin: "laki-laki",
    pekerjaan: "petani",
    keterangan: "kosong",
  },
  {
    id: 2,
    idKel:"suge321",
    nama: "Andreas Suge",
    nik: "720118054100002",
    tempat: "Dusun 5",
    ttl: "Palu,11 maret 1996",
    umur: 16,
    kelamin: "laki-laki",
    pekerjaan: "petani",
    keterangan: "kosong",
  },
];

export default function DataPendudukAdmin() {
  return (
    <>
      <div className="w-full px-7 mb-6">
        <h1 className="text-2xl font-semibold">Data Penduduk</h1>
      </div>
      <div className="w-ful mx-6 mt-2">
        <TableWrapper tableTitle="Table Data Penduduk">
          <TableThead>
            <TableTh>No</TableTh>
            <TableTh>AK</TableTh>
            <TableTh>nama</TableTh>
            <TableTh>nik</TableTh>
            <TableTh>tempat</TableTh>
            <TableTh>tanggal lahir</TableTh>
            <TableTh>umur</TableTh>
            <TableTh>Jenis Kelamin</TableTh>
            <TableTh>pekerjaan</TableTh>
            <TableTh>Keterangan</TableTh>
            <TableTh>Aksi</TableTh>
          </TableThead>
          {dataPenduduk.map((data, i) => (
            <TableTbody key={i}>
              <TableTd>{data.id}</TableTd>
              <TableTd>
                <Link href={`/admin/data-penduduk/${i}/${data.idKel}`} className="bg-primary text-white">
                  edit data keluarga
                </Link>
              </TableTd>
              <TableTd>{data.nama}</TableTd>
              <TableTd>{data.nik}</TableTd>
              <TableTd>{data.tempat}</TableTd>
              <TableTd>{data.ttl}</TableTd>
              <TableTd>{data.umur}</TableTd>
              <TableTd>{data.kelamin}</TableTd>
              <TableTd>{data.pekerjaan}</TableTd>
              <TableTd>{data.keterangan}</TableTd>
              <TableTd>
                <div className="flex gap-2 text-slate-600 text-md">
                  <div className="hover:text-primary transition-all text-blue-500">
                    <FaRegEye />
                  </div>
                  <div className="hover:text-primary transition-all text-yellow-600">
                    <FaRegEdit />
                  </div>
                  <div className="hover:text-primary transition-all text-red-600">
                    <GoTrash />
                  </div>
                </div>
              </TableTd>
            </TableTbody>
          ))}
        </TableWrapper>
      </div>
    </>
  );
}
