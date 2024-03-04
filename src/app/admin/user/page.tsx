import TableWrapper from "@/components/elements/table/TableWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTh from "@/components/elements/table/TableTh";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export default function DataPendudukAdmin() {
  return(
      <>
        <div className="w-full px-7 mb-6">
          <h1 className="text-2xl font-semibold">User</h1>
        </div>
        <div className="w-ful mx-6 mt-2">
          <TableWrapper
            tableTitle="Table Objek Wisata"
          >
            <TableThead>
              <TableTh>No</TableTh>
              <TableTh>nama Wisata</TableTh>
              <TableTh>lokasi</TableTh>
              <TableTh>pengelola</TableTh>
              <TableTh>foto 1</TableTh>
              <TableTh>foto 2</TableTh>
              <TableTh>foto 3</TableTh>
              <TableTh>Aksi</TableTh>
            </TableThead>
            <TableTbody>
              <TableTd>1</TableTd>
              <TableTd>Watu moali</TableTd>
              <TableTd>dusun 4</TableTd>
              <TableTd>Ko Enda</TableTd>
              <TableTd>Belum ada</TableTd>
              <TableTd>Belum ada</TableTd>
              <TableTd>Belum ada</TableTd>
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
  )
}
