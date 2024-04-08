"use client";
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
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Pagination from "@/components/elements/Pagination";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DataPendudukAdmin() {
  const [showAddData, setShowAddData] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [fillteredObjek, setFillteredObjek] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedData, setPaginatedData] = useState([]);

  const [currPage,setCurrPage]=useState(1)

  const router = useRouter();

  const closeShowAddData = () => {
    setShowAddData(false);
  };

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/objek-wisata`,
    fetcher
  );

  const objekWisata: any = { data: data?.objekWisata };

  const handleSearch = (e: any) => {
    // setSearchQuery(e.target.value);

    if (searchQuery === "") {
      setFillteredObjek([]);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filltered = objekWisata.data?.filter(
        (objek: any) =>
          objek.wisata?.toLowerCase().includes(lowercaseQuery) ||
          objek.lokasi?.toLowerCase().includes(lowercaseQuery) ||
          objek.pengelola?.toLowerCase().includes(lowercaseQuery)
      );
      console.log(filltered);
      setFillteredObjek(filltered);
    }
  };

  const removeObjekWisata = async ({
    id,
    wisata,
  }: {
    id: string;
    wisata: string;
  }) => {
    const confirmed = confirm(`Yakin ingin menghapus ${wisata}?`);

    if (confirmed) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/objek-wisata?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <>
      <TambahDataObjekWisata
        showAddData={showAddData}
        setShowAddData={closeShowAddData}
        // setAddedNotif={()=>setAddedNotif}
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
            className={`w-12/12 px-5 pb-5 border bg-white border-slate-100 relative`}
          >
            {/* <div className="my-2">
              {addedNotif===true && (
                <div className="bg-red-500">Berhasil Ditambahkan!</div>
              )}
            </div> */}
            {/* show entries */}
            <ShowEntries
              handleSearch={handleSearch}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

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
                      {objekWisata.data?.length &&
                      fillteredObjek.length === 0 ? (
                        objekWisata.data?.map((item: any, i: any) => (
                          <TableTbody key={i}>
                            <TableTd>{i + 1}</TableTd>
                            <TableTd>{item.wisata}</TableTd>
                            <TableTd>{item.lokasi}</TableTd>
                            <TableTd>{item.pengelola}</TableTd>
                            <TableTd>{item.img1}</TableTd>
                            <TableTd>{item.img2}</TableTd>
                            <TableTd>{item.img3}</TableTd>
                            <TableTd>
                              <div className="flex gap-2 text-slate-600 text-lg">
                                <Link
                                  href={`/admin/objek-wisata/detail/${item._id}`}
                                  className="hover:text-primary transition-all text-yellow-600"
                                  id={item._id}
                                  // onClick={() => handleEditData(item._id)}
                                >
                                  <FaRegEdit />
                                </Link>
                                <div
                                  className="hover:text-primary transition-all text-red-600"
                                  onClick={() =>
                                    removeObjekWisata({
                                      id: item._id,
                                      wisata: item.wisata,
                                    })
                                  }
                                >
                                  <GoTrash />
                                </div>
                              </div>
                            </TableTd>
                          </TableTbody>
                        ))
                      ) : fillteredObjek.length !== 0 ? (
                        fillteredObjek.map((item: any, i: any) => (
                          <TableTbody key={i}>
                            <TableTd>{i + 1}</TableTd>
                            <TableTd>{item.wisata}</TableTd>
                            <TableTd>{item.lokasi}</TableTd>
                            <TableTd>{item.pengelola}</TableTd>
                            <TableTd>{item.img1}</TableTd>
                            <TableTd>{item.img2}</TableTd>
                            <TableTd>{item.img3}</TableTd>
                            <TableTd>
                              <div className="flex gap-2 text-slate-600 text-lg">
                                <Link
                                  href={`/admin/objek-wisata/detail/${item._id}`}
                                  className="hover:text-primary transition-all text-yellow-600"
                                  id={item._id}
                                  // onClick={() => handleEditData(item._id)}
                                >
                                  <FaRegEdit />
                                </Link>
                                <div
                                  className="hover:text-primary transition-all text-red-600"
                                  onClick={() =>
                                    removeObjekWisata({
                                      id: item._id,
                                      wisata: item.wisata,
                                    })
                                  }
                                >
                                  <GoTrash />
                                </div>
                              </div>
                            </TableTd>
                          </TableTbody>
                        ))
                      ) : objekWisata.data?.length === 0 ? (
                        <div>data kosong...</div>
                      ) : (
                        <TableTbody>
                          <TableTd>Memuat ...</TableTd>
                          <TableTd>Memuat ...</TableTd>
                          <TableTd>Memuat ...</TableTd>
                          <TableTd>memuat ...</TableTd>
                          <TableTd>Memuat gambar ...</TableTd>
                          <TableTd>Memuat gambar ...</TableTd>
                          <TableTd>Memuat gambar ...</TableTd>
                          <TableTd>
                            <div className="flex gap-2 text-slate-600 text-lg">
                              <div className="hover:text-primary transition-all text-yellow-600">
                                <FaRegEdit />
                              </div>
                              <div className="hover:text-primary transition-all text-red-600">
                                <GoTrash />
                              </div>
                            </div>
                          </TableTd>
                        </TableTbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <Pagination  />
          </div>
        </div>
      </div>
    </>
  );
}
