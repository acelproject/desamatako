import TableWrapper from "@/components/elements/table/TableWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTh from "@/components/elements/table/TableTh";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEdit, FaRegEye } from "react-icons/fa";

export default function Alamat() {
  return (
    <>
      <div className="w-full px-7 mb-6">
        <h1 className="text-2xl font-semibold">Jenis Surat</h1>
      </div>
      <div className="w-ful mx-6 mt-2">
        <TableWrapper
          tableTitle="Table Jenis Surat"
          href="/admin/data-kelahiran/tambah-data"
        >
          <TableThead>
            <TableTh>
              <div className="text-center">no</div>
            </TableTh>
            <TableTh>
              <div className="text-center">Jenis Surat</div>
            </TableTh>
            <TableTh>
              <div className="text-center">Aksi</div>
            </TableTh>
          </TableThead>
          <TableTbody>
            <TableTd>
              <div className="text-center">1</div>
            </TableTd>
            <TableTd>
              <div className="">Melihat/Membaca/Memperoleh</div>
            </TableTd>
            <TableTd>
              <div className="flex justify-center">
                <div className="flex gap-2 text-slate-600 text-lg">
                  <div className="hover:text-primary transition-all text-blue-500">
                    <FaRegEye />
                  </div>
                  <div className="hover:text-primary transition-all text-yellow-600">
                    <FaRegEdit />
                  </div>
                </div>
              </div>
            </TableTd>
          </TableTbody>
          <TableTbody>
            <TableTd>
              <div className="text-center">2</div>
            </TableTd>
            <TableTd>
              <div className="">Melihat/Membaca/Memperoleh</div>
            </TableTd>
            <TableTd>
              <div className="flex justify-center">
                <div className="flex gap-2 text-slate-600 text-lg">
                  <div className="hover:text-primary transition-all text-blue-500">
                    <FaRegEye />
                  </div>
                  <div className="hover:text-primary transition-all text-yellow-600">
                    <FaRegEdit />
                  </div>
                </div>
              </div>
            </TableTd>
          </TableTbody>
        </TableWrapper>
      </div>
    </>
  );
}
