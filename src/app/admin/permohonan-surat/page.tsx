import Table from "@/components/elements/Table";
import AdminWrapper from "../AdminWrapper";




export default function PermohonanSuratAdmin() {
  return (
    <AdminWrapper>
      <>
      <div className="w-full px-7 mb-6">
        <h1 className="text-2xl font-semibold">Permohonan Surat</h1>
      </div>
      <div className="w-ful mx-6 mt-2">
        <Table title="Permohonan Surat" />
      </div>
    </>
    </AdminWrapper>
  );
}
