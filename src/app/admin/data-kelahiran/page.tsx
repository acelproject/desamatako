import TableWrapper from "@/components/elements/table/TableWrapper";
import AdminWrapper from "../AdminWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTh from "@/components/elements/table/TableTh";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";


export default function DataKelahiranAdmin() {
  return (
    <AdminWrapper>
      <>
        <div className="w-full px-7 mb-6">
          <h1 className="text-2xl font-semibold">Data Kelahiran</h1>
        </div>
        <div className="w-ful mx-6 mt-2">
          <TableWrapper tableTitle="Table Data Kelahiran" >
            <TableThead>
              <TableTh>No</TableTh>
              <TableTh>nama Ayah</TableTh>
              <TableTh>nama Ibu</TableTh>
              <TableTh>nama Anak</TableTh>
              <TableTh>tempat</TableTh>
              <TableTh>tanggal lahir</TableTh>
              <TableTh>Jenis Kelamin</TableTh>
              <TableTh>penolong Kelahiran</TableTh>
              <TableTh>Keterangan</TableTh>
              <TableTh>Aksi</TableTh>
            </TableThead>
            <TableTbody>
              <TableTd>1</TableTd>
              <TableTd>Yono bakri</TableTd>
              <TableTd>Lidiya</TableTd>
              <TableTd>Albert</TableTd>
              <TableTd>Palu</TableTd>
              <TableTd>13 Juny Palu</TableTd>
              <TableTd>laki-laki</TableTd>
              <TableTd>Bidan Mercy</TableTd>
              <TableTd>Normal</TableTd>
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
    </AdminWrapper>
  );
}
