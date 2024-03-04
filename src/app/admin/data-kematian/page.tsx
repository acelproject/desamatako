import TableWrapper from "@/components/elements/table/TableWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTh from "@/components/elements/table/TableTh";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export default function DataKematianAdmin() {
  return (
      <>
        <div className="w-full px-7 mb-6">
          <h1 className="text-2xl font-semibold">Data Kematian</h1>
        </div>
        <div className="w-12/12 mx-6 mt-2">
          <TableWrapper tableTitle="Table Data Kematian" >
          <TableThead>
              <TableTh>No</TableTh>
              <TableTh>nama</TableTh>
              <TableTh>tempat</TableTh>
              <TableTh>tanggal lahir</TableTh>
              <TableTh>Jenis Kelamin</TableTh>
              <TableTh>penyebab kematian</TableTh>
              <TableTh>tanggal kematian</TableTh>
              <TableTh>Keterangan</TableTh>
              <TableTh>Aksi</TableTh>
            </TableThead>
            <TableTbody>
              <TableTd>1</TableTd>
              <TableTd>Yono bakri</TableTd>
              <TableTd>matako</TableTd>
              <TableTd>11 Maret 2000</TableTd>
              <TableTd>Laki-laki</TableTd>
              <TableTd>Ditabrak mobil</TableTd>
              <TableTd>34 oktober 2023</TableTd>
              <TableTd>telah meninggal</TableTd>
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
          </TableWrapper>
        </div>
      </>

  );
}