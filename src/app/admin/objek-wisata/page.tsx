"use client";
import TableWrapper from "@/components/elements/table/TableWrapper";
import TableThead from "@/components/elements/table/TableThead";
import TableTbody from "@/components/elements/table/TableTbody";
import TableTh from "@/components/elements/table/TableTh";
import TableTd from "@/components/elements/table/TableTd";
import { FaRegEye, FaRegEdit, FaPlus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

import { useState } from "react";
import ShowEntries from "@/components/elements/table/ShowEntries";
import TambahDataObjekWisata from "./TambahData";
import EditDataObjek from "./EditData";

export default function DataPendudukAdmin() {
  const [showAddData, setShowAddData] = useState(false);
  const [showEditData, setShowEditData] = useState(false);

  const closeShowAddData = () => {
    setShowAddData(false);
  };
  const closeShowEditData = () => {
    setShowEditData(false);
  };

  return (
    <>
      <TambahDataObjekWisata showAddData={showAddData} setShowAddData={closeShowAddData} />
      <EditDataObjek
        showEditData={showEditData}
        setShowEditData={closeShowEditData}
      />
      <div className="w-full px-7 mb-6">
        <h1 className="text-2xl font-semibold">Objek Wisata</h1>
      </div>
      <div className="w-ful mx-6 mt-2">
        <div className="w-full">
          <div className=" w-full flex bg-white border-b "></div>
          <div
            className={`w-full bg-primary rounded-t-sm flex items-center justify-between px-7 `}
          >
            <h1 className="text-lg font-semibold text-white py-3 ">
              Tabel Objek Wisata
            </h1>

            <div
              className="flex items-center gap-1 hover:bg-white transition-all hover:text-primary py-1 px-2 text-sm text-white cursor-pointer rounded-md border  border-white"
              onClick={() => setShowAddData(true)}
            >
              <div className="font-bold">
                <FaPlus />
              </div>
              <div className="mt-[1px]">Tambah Data</div>
            </div>
          </div>

          <div
            className={`w-12/12 px-5 pb-5 border bg-white border-slate-100 relative pt-5`}
          >
            {/* show entries */}
            <ShowEntries />

            <div className="flex flex-col overflow-x-auto scrollbar-thin scrollbar-w-4 scrollbar-h-4 ">
              <div className=" sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8 ">
                  <div
                    className={` scrollbar-thumb-slate-300 scrollbar-track-slate-100  border-x border-t border-slate-200 rounded-sm `}
                  >
                    <table className=" text-left text-sm w-[100%]">
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
                            <div className="hover:text-primary transition-all text-yellow-600" onClick={() => setShowEditData(true)}>
                              <FaRegEdit />
                            </div>
                            <div className="hover:text-primary transition-all text-red-600">
                              <GoTrash />
                            </div>
                          </div>
                        </TableTd>
                      </TableTbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <div className="bg-slate-200 text-slate-900 text-sm flex items-center px-3 py-1 rounded-md hover:bg-primary hover:text-white cursor-pointer">
                Previous
              </div>
              <div className=" hover:bg-primary bg-primary text-white hover:text-white px-2 flex justify-center items-center rounded-sm cursor-pointer">
                1
              </div>
              <div className="bg-slate-200 text-slate-900 text-sm flex items-center px-3 py-1 rounded-md hover:bg-primary hover:text-white cursor-pointer">
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
