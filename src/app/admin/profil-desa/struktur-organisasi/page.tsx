import TableWrapper from "@/components/elements/table/TableWrapper";
import AdminWrapper from "../../AdminWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTh from "@/components/elements/table/TableTh";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export default function ProfilDesaStrukturOrgAdmin() {
  return (
    <AdminWrapper>
      <>
        <div className="w-full px-7 mb-5">
          <h1 className="text-2xl font-semibold">Edit Struktur Organisasi</h1>
        </div>
        <div className="w-ful mx-6 mt-2 bg-white shadow-sm rounded-md p-5">
          <div>
            <h1 className="text-lg font-semibold text-slate-600">
              Gambar Struktur Organisasi
            </h1>
            <div className="mt-3 p-2 border rounded-md">
              <input type="file" />
            </div>
          </div>
        </div>
      </>
    </AdminWrapper>
  );
}
