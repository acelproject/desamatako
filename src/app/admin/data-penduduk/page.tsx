import TableWrapper from "@/components/elements/table/TableWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTh from "@/components/elements/table/TableTh";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

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
            <TableTh>nama</TableTh>
            <TableTh>nik</TableTh>
            <TableTh>tempat</TableTh>
            <TableTh>tanggal lahir</TableTh>
            <TableTh>umur</TableTh>
            <TableTh>Jenis Kelamin</TableTh>
            <TableTh>SHdk</TableTh>
            <TableTh>pekerjaan</TableTh>
            <TableTh>Keterangan</TableTh>
            <TableTh>Aksi</TableTh>
          </TableThead>
          <TableTbody>
            <TableTd>1</TableTd>
            <TableTd>Marchel Lumimpah</TableTd>
            <TableTd>16524373637873</TableTd>
            <TableTd>Desa Matako</TableTd>
            <TableTd>11 Maret 2000</TableTd>
            <TableTd>23</TableTd>
            <TableTd>Laki-laki</TableTd>
            <TableTd>Adik laki-laki</TableTd>
            <TableTd>Programmer</TableTd>
            <TableTd>Hidup</TableTd>
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
          <TableTbody>
            <TableTd>1</TableTd>
            <TableTd>Marchel Lumimpah</TableTd>
            <TableTd>16524373637873</TableTd>
            <TableTd>Desa Matako</TableTd>
            <TableTd>11 Maret 2000</TableTd>
            <TableTd>23</TableTd>
            <TableTd>Laki-laki</TableTd>
            <TableTd>Adik laki-laki</TableTd>
            <TableTd>Programmer</TableTd>
            <TableTd>Hidup</TableTd>
            <TableTd>
              {" "}
              <div className="flex gap-2 text-slate-600  text-md">
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
        </TableWrapper>
      </div>
    </>
  );
}
