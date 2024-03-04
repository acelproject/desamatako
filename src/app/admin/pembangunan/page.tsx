import TableWrapper from "@/components/elements/table/TableWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTh from "@/components/elements/table/TableTh";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";


export default function PembangunanAdmin() {
  return (

      <>
        <div className="w-full px-7 mb-6">
          <h1 className="text-2xl font-semibold">Pembangunan</h1>
        </div>
        <div className="w-ful mx-6 mt-2">
          <TableWrapper tableTitle="Table Data Pembangunan" >
            <TableThead>
              <TableTh>No</TableTh>
              <TableTh>pembangunan</TableTh>
              <TableTh>Lokasi</TableTh>
              <TableTh>anggaran</TableTh>
              <TableTh>volume</TableTh>
              <TableTh>sumber dana</TableTh>
              <TableTh>tahun</TableTh>
              <TableTh>pelaksana</TableTh>
              <TableTh>manfaat</TableTh>
              <TableTh>keterangan</TableTh>
              <TableTh>foto 0%</TableTh>
              <TableTh>foto 50%</TableTh>
              <TableTh>foto 100%</TableTh>
              <TableTh>Aksi</TableTh>
            </TableThead>
            <TableTbody>
              <TableTd>1</TableTd>
              <TableTd>jembatan</TableTd>
              <TableTd>dusun 3</TableTd>
              <TableTd>1m</TableTd>
              <TableTd>13 x 1</TableTd>
              <TableTd>APBN</TableTd>
              <TableTd>2023</TableTd>
              <TableTd>Tukang</TableTd>
              <TableTd>belum ada</TableTd>
              <TableTd>belum ada</TableTd>
              <TableTd>belum ada</TableTd>
              <TableTd>belum ada</TableTd>
              <TableTd>belum ada</TableTd>
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
