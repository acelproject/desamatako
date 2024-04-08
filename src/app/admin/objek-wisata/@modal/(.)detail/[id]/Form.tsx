import { MouseEventHandler, useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";
import useSWR from "swr";
import { IoClose } from "react-icons/io5";

type AddDataProps = {
  id: string;
  urll: any;
};

export default function Form({ id, urll }: AddDataProps) {
  const overlay = useRef(null);
  const router = useRouter();

  const [newWisata, setNewWisata] = useState("");
  const [newLokasi, setNewLokasi] = useState("");
  const [newPengelola, setNewPengelola] = useState("");
  const [newImg1, setNewImg1] = useState("");
  const [newImg2, setNewImg2] = useState("");
  const [newImg3, setNewImg3] = useState("");

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/objek-wisata/${id}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json.slip.advice);
        setNewWisata(json.detailObjekWisata.wisata);
        setNewLokasi(json.detailObjekWisata.lokasi);
        setNewPengelola(json.detailObjekWisata.pengelola);
        setNewImg1(json.detailObjekWisata.img1);
        setNewImg2(json.detailObjekWisata.img2);
        setNewImg3(json.detailObjekWisata.img3);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };
  const handleSubmitEdit = async (e: any) => {
    e.preventDefault();
    const res = {
      newWisata: e.target.wisata.value,
      newLokasi: e.target.lokasi.value,
      newPengelola: e.target.pengelola.value,
      newImg1: e.target.img1.value,
      newImg2: e.target.img2.value,
      newImg3: e.target.img3.value,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/objek-wisata/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(res),
        }
      );
      if (!response.ok) {
        throw new Error("Gagal Mengedit Data!");
      }
      window.location.reload();
      router.back();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      ref={overlay}
      className={`fixed z-[999999] left-0 right-0 top-0 bottom-0 mx-auto bg-black/60  flex`}
      onClick={close}
    >
      <div className="absolute w-4/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-7 bg-white rounded-lg">
        <div className="px-7 mb-5 flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Edit Data Objek Wisata</h1>
          <div onClick={() => router.back()}>
            <IoClose className="text-lg" />
          </div>
        </div>
        <form action="" onSubmit={handleSubmitEdit}>
          <div className=" mx-7 flex flex-col gap-5">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="nama" className="font-semibold">
                Nama Wisata
              </label>
              <input
                type="text"
                id="wisata"
                name="wisata"
                className="border px-3 py-1 text-black flex  rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                onChange={(e) => setNewWisata(e.target.value)}
                value={newWisata}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Lokasi
              </label>
              <input
                type="text"
                id="lokasi"
                name="lokasi"
                className="border text-black px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                onChange={(e) => setNewLokasi(e.target.value)}
                value={newLokasi}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Pengelola
              </label>
              <input
                type="text"
                id="pengelola"
                name="pengelola"
                className="border px-3 py-1 text-black rounded-md focus:ring-2 transition-all focus:border-primary outline-none"
                onChange={(e) => setNewPengelola(e.target.value)}
                value={newPengelola}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Foto 1
              </label>
              <input
                type="file"
                id="img1"
                name="img1"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"

                // value={newImg1}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Foto 2
              </label>
              <input
                type="file"
                id="img2"
                name="img2"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"

                // value={newImg2}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">
                Foto 3
              </label>
              <input
                type="file"
                id="img3"
                name="img3"
                className="border px-3 py-1 rounded-md focus:ring-2 transition-all focus:border-primary outline-none"

                // value={newImg3}
              />
            </div>
            <div className="mt-5 flex justify-between">
              <button
                className="bg-slate-100 shadow px-4 py-[7px] mt-[-1px] flex gap-1 text-slate-800 border items-center rounded-full"
                onClick={() => router.back()}
              >
                <div>Close</div>
              </button>
              <button
                type="submit"
                className="bg-primary px-4 py-[7px] flex gap-1 text-white items-center rounded-full"
              >
                <div>Save</div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
