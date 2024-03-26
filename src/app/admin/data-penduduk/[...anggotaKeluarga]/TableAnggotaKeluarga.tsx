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

type TabelAnggotaKeluargaProps = {
  anggotaKeluarga: any;
  kodeKeluarga: string;
  kepalaKeluarga: string;
};

const daftarKeluarga = [
  {
    id: "1",
    idKel: "lumimpah123",
    nama: "Yohanes Marchel",
    hubungan: "Kepala Keluarga",
    nik: "72011800000004",
    jenisKelamin: "laki-laki",
  },
  {
    id: "2",
    idKel: "suge55",
    nama: "Ishak",
    hubungan: "Kakak Pertama",
    nik: "72011800000006",
    jenisKelamin: "laki-laki",
  },
];

export default function TableAnggotaKeluarga(props: TabelAnggotaKeluargaProps) {
  const { anggotaKeluarga, kodeKeluarga, kepalaKeluarga } = props;
  return (
    <>
      <div className="w-full px-7 mb-2">
        <h1 className="text-2xl font-semibold">Data Daftar Anggota Keluarga</h1>
      </div>

      <div className="w-ful mx-6 mt-2">
        <TableWrapper
          tableTitle="Table Daftar Anggota Keluarga"
          href=""
          kodeKeluarga={kodeKeluarga}
          kepalaKeluarga={kepalaKeluarga}
          textTambahData="AK Baru"
        >
          <TableThead>
            <TableTh>No</TableTh>
            <TableTh>tanggal</TableTh>
            <TableTh>no urut</TableTh>
            <TableTh>nik</TableTh>
            <TableTh>nama lengkap</TableTh>
            <TableTh>no akte kelahiran</TableTh>
            <TableTh>jenis kelamin</TableTh>
            <TableTh>hubungan keluarga</TableTh>
            <TableTh>tempat lahir</TableTh>
            <TableTh>tanggal lahir</TableTh>
            <TableTh>umur</TableTh>
            <TableTh>tanggal pencatatan</TableTh>
            <TableTh>status perkawinan</TableTh>
            <TableTh>agama</TableTh>
            <TableTh>golongan darah</TableTh>
            <TableTh>kewarga negaraan</TableTh>
            <TableTh>aksi</TableTh>
          </TableThead>
          {anggotaKeluarga.map((data: any, i: any) => (
            <TableTbody key={(i = 1)}>
              <TableTd>{i + 1}</TableTd>
              <TableTd>{data.tanggal}</TableTd>
              <TableTd>{data.noUrut}</TableTd>
              <TableTd>{data.nik}</TableTd>
              <TableTd>{data.nama}</TableTd>
              <TableTd>{data.noAkteKel}</TableTd>
              <TableTd>{data.jenisKelamin}</TableTd>
              <TableTd>{data.hubungan}</TableTd>
              <TableTd>{data.tempatLahir}</TableTd>
              <TableTd>{data.tanggalLahir}</TableTd>
              <TableTd>{data.umur}</TableTd>
              <TableTd>{data.tanggalCatat}</TableTd>
              <TableTd>{data.statusKawin}</TableTd>
              <TableTd>{data.agama}</TableTd>
              <TableTd>{data.golDarah}</TableTd>
              <TableTd>{data.negara}</TableTd>
              <TableTd>
                <div className="flex gap-2 text-slate-600 text-md">
                  <div className="hover:text-primary transition-all text-blue-500">
                    <FaRegEye />
                  </div>
                  <div className="hover:text-primary transition-all text-yellow-600">
                    <FaRegEdit />
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
