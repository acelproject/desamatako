import TableWrapper from "@/components/elements/table/TableWrapper";
import AdminWrapper from "../AdminWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTh from "@/components/elements/table/TableTh";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export default function DataPendudukAdmin() {
  return (
    <AdminWrapper>
      <>
        <div className="w-full px-7 mb-6">
          <h1 className="text-2xl font-semibold">User</h1>
        </div>
        <div className="w-ful mx-6 mt-2">
          <TableWrapper
            tableTitle="Table User"
          >
            <TableThead>
              <TableTh>No</TableTh>
              <TableTh>nama user</TableTh>
              <TableTh>user name </TableTh>
              <TableTh>level</TableTh>
              <TableTh>Aksi</TableTh>
            </TableThead>
            <TableTbody>
              <TableTd>1</TableTd>
              <TableTd>Marchel Lumimpah</TableTd>
              <TableTd>admin</TableTd>
              <TableTd>admin</TableTd>
              <TableTd>
                <div className="flex gap-2 text-slate-600 text-md">
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
