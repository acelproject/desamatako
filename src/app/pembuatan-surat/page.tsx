"use client";

import { useState } from "react";
import PagesWrapper from "../../components/layouts/PagesWrapper";
import { motion } from "framer-motion";
import SuratHibahComponent from "../../components/fragments/pembuatan-surat/adding-form/SuratHibahComponent";
import SuratJualBeliComponent from "../../components/fragments/pembuatan-surat/adding-form/SuratJualBeliComponent";
import SuratKetKematianComponent from "../../components/fragments/pembuatan-surat/adding-form/surat-ket-kematian/SuratKetKematianComponent";
import SuratKetMenikahComponent from "../../components/fragments/pembuatan-surat/adding-form/surat-ket-menikah/SuratKetMenikah";
import SuratKuasaComponent from "../../components/fragments/pembuatan-surat/adding-form/surat-ket-usaha/SuratKuasaComponent";
import SuratSKPTComponent from "../../components/fragments/pembuatan-surat/adding-form/surat-skpt/SuratSKPTComponent";
import { useRouter } from "next/navigation";
import { set } from "mongoose";

const menusSurat = [
  {
    id: 1,
    nama: "SURAT HIBAH",
    category: "hibah",
    addForm: true,
  },
  {
    id: 2,
    nama: "SURAT JUAL BELI",
    category: "jual_beli",
    addForm: true,
  },
  {
    id: 3,
    nama: "SURAT KETERANGAN",
    category: "keterangan",
    addForm: false,
  },
  {
    id: 4,
    nama: "SURAT KETERANGAN BERKELAKUAN BAIK",
    category: "kelakuan_baik",
    addForm: false,
  },
  {
    id: 5,
    nama: "SURAT KETERANGAN DOMISILI",
    category: "domisili",
    addForm: false,
  },
  {
    id: 6,
    nama: "SURAT KETERANGAN HILANG",
    category: "hilang",
    addForm: false,
  },
  {
    id: 7,
    nama: "SURAT KETERANGAN KEMATIAN",
    category: "kematian",
    addForm: true,
  },
  {
    id: 8,
    nama: "SURAT KETERANGAN MENIKAH",
    category: "nikah",
    addForm: true,
  },
  {
    id: 9,
    nama: "SURAT KETERANGAN TIDAK MAMPU",
    category: "tidak_mampu",
    addForm: false,
  },
  {
    id: 10,
    nama: "SURAT KETERANGAN USAHA",
    category: "usaha",
    addForm: true,
  },
  {
    id: 11,
    nama: "SURAT KUASA",
    category: "kuasa",
    addForm: true,
  },
  {
    id: 12,
    nama: "SURAT SKPT",
    category: "skpt",
    addForm: true,
  },
  {
    id: 13,
    nama: "SURAT SKPWNI",
    category: "skpwni",
    addForm: true,
  },
];
const menusDusun = [
  {
    id: 1,
    nama: "Dusun 1",
  },
  {
    id: 2,
    nama: "Dusun 2",
  },
  {
    id: 3,
    nama: "Dusun 3",
  },
];

export default function WritingLetters() {
  const [activeTypeLetter, setActiveTypeLetter] = useState(false);
  const [activeDusun, setActiveDusun] = useState(false);
  const [textJenis, setTextJenis] = useState("-- Pilih Jenis Surat --");
  const [textDusun, setDusun] = useState("-- Dusun--");

  // form tambhan untuk jenis surat tertentu
  const [addForm, setAddForm] = useState(false);
  const [formType, setFormType] = useState("");
  const [categorySurat, setCategorySurat] = useState("");

  const handleDropDusun = (e: any) => {
    setDusun(e);
    setActiveDusun(!activeDusun);
  };
  const handleDropJenis = ({ title, addForm, formType,category }: any) => {
    setCategorySurat(category)
    setTextJenis(title);
    setAddForm(addForm);
    setFormType(formType);
    setActiveTypeLetter(!activeTypeLetter);
  };

  const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = {
      nama: e.target.nama.value,
      nik: e.target.nik.value,
      noWa: e.target.noWa.value,
      surat:textJenis,
      jenisSurat: categorySurat,
      alamat: textDusun,
      kk: e.target.kk.value,
      ktp: e.target.ktp.value,
      status:"diproses",
    };
    // if (!res.nama) {
    //   alert("Nama kosong");
    //   return;
    // }
    // if (!res.nik) {
    //   alert("NIK Kosong");
    //   return;
    // }
    // if (!res.noWa) {
    //   alert("Nomor whatsapp kosong");
    //   return;
    // }
    // if (!res.jenisSurat) {
    //   alert("jenis surat belum dipilih");
    //   return;
    // }
    // if (!res.kk) {
    //   alert("KK kosong");
    //   return;
    // }
    // if (!res.ktp) {
    //   alert("KTP kosong");
    //   return;
    // }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/surat-masuk`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify(res)
      });

      if (response.ok) {
        window.location.reload()
        router.refresh()
      }else{
        throw new Error("Ada yang salah")
      }
    } catch (error) {
      alert(error)
      return
    }
  };
  return (
    <PagesWrapper pageTitle="Pembuatan Surat">
      <div className="w-full">
        <h1 className={`text-3xl font-semibold text-center mb-10 `}>
          {" "}
          FORM PERMOHONAN PEMBUATAN SURAT
        </h1>

        <div className="w-full flex px-20 gap-10 ">
          <div className="w-10/12 mx-auto ">
            <h1 className="text-2xl font-semibold  mb-5"> Identitas pemohon</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex gap-10">
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type=""
                    className="w-full placeholder:text-mydark placeholder:font-serif placeholder:text-lg border border-gray-300 py-2 px-3 rounded-md focus:outline-none"
                    placeholder=""
                    name="nama"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="font-medium mb-2">
                    NIK
                  </label>
                  <input
                    type=""
                    className="w-full placeholder:text-mydark placeholder:font-serif placeholder:text-lg border border-gray-300 py-2 px-3 rounded-md focus:outline-none"
                    placeholder=""
                    name="nik"
                  />
                </div>
              </div>
              <div className="flex gap-10 mt-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="font-medium mb-2">
                    No. WA
                  </label>
                  <input
                    type=""
                    className="w-full placeholder:text-mydark placeholder:font-serif placeholder:text-lg border border-gray-300 py-2 px-3 rounded-md focus:outline-none"
                    placeholder=""
                    name="noWa"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full relative">
                    <label htmlFor="" className="font-medium mb-2">
                      Alamat
                    </label>

                    <div
                      className="bg-gray-200 px-3 py-2 rounded-md text-center cursor-pointer relative"
                      onClick={() => setActiveDusun(!activeDusun)}
                    >
                      {textDusun}
                    </div>

                    <motion.ul
                      className={`${
                        activeDusun ? "block" : "hidden"
                      } bg-slate-100 rounded-md absolute w-full top-[75px] overflow-hidden`}
                      initial={{ y: -20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0,
                        y: { type: "spring", stiffness: 100 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1,
                      }}
                    >
                      {menusDusun.map((data) => (
                        <li
                          key={data.id}
                          className="hover:bg-primary px-3 py-1 transition-all duration-100"
                          onClick={() => handleDropDusun(data.nama)}
                        >
                          {data.nama}
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 mt-5 justify-between">
                <div className="flex flex-col w-3/12 ">
                  <label htmlFor="" className="font-medium mb-2">
                    Upload KTP
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
                    id="file_input"
                    type="file"
                    name="ktp"
                  />
                </div>
                <div
                  className={`${
                    formType === "SURAT HIBAH" ||
                    formType === "SURAT JUAL BELI" ||
                    formType === "SURAT KETERANGAN KEMATIAN" ||
                    formType === "SURAT SKPT"
                      ? " hidden"
                      : ""
                  } flex flex-col w-6/12 ps-5`}
                >
                  <label htmlFor="" className="font-medium mb-2">
                    Upload KK
                  </label>
                  <input
                    className="block w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
                    id="file_input"
                    type="file"
                    name="kk"
                  />
                </div>
              </div>
              <div className="flex gap-10 mt-5 justify-between">
                {/* Adding form */}
                {formType === "SURAT HIBAH" && (
                  <>
                    <div className="flex flex-col w-3/12 ">
                      <label htmlFor="" className="font-medium mb-2">
                        Upload Dokumen Hibah
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
                        id="file_input"
                        type="file"
                      />
                    </div>
                    <div className="flex flex-col w-6/12 ps-5">
                      <label htmlFor="" className="font-medium mb-2">
                        Upload Blangko Pajak
                      </label>
                      <input
                        className="block w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
                        id="file_input"
                        type="file"
                      />
                    </div>
                  </>
                )}
                {formType === "SURAT JUAL BELI" && (
                  <>
                    <div className="flex flex-col w-3/12 ">
                      <label htmlFor="" className="font-medium mb-2">
                        Upload Sertifikat Tanah
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
                        id="file_input"
                        type="file"
                      />
                    </div>
                    <div className="flex flex-col w-6/12 ps-5">
                      <label htmlFor="" className="font-medium mb-2">
                        Upload Blangko Pajak
                      </label>
                      <input
                        className="block w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
                        id="file_input"
                        type="file"
                      />
                    </div>
                  </>
                )}
                {formType === "SURAT KETERANGAN MENIKAH" && (
                  <>
                    <div className="flex flex-col w-3/12 gap-4 ">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-medium">
                          Upload KTP (Bapak)
                        </label>
                        <input
                          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
                          id="file_input"
                          type="file"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-medium">
                          Alamat Pernikahan
                        </label>
                        <input
                          type=""
                          className="w-full placeholder:text-mydark placeholder:font-serif placeholder:text-lg border border-gray-300 py-2 px-3 rounded-md focus:outline-none"
                          placeholder=""
                          name=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-6/12 ps-5">
                      <label htmlFor="" className="font-medium mb-2">
                        Upload KTP (Ibu)
                      </label>
                      <input
                        className="block w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
                        id="file_input"
                        type="file"
                      />
                    </div>
                  </>
                )}
                {formType === "SURAT KETERANGAN USAHA" && (
                  <>
                    <div className="flex flex-col w-3/12 ">
                      <label htmlFor="" className="font-medium mb-2">
                        Jenis Usaha
                      </label>
                      <input
                        type=""
                        className="w-full placeholder:text-mydark placeholder:font-serif placeholder:text-lg border border-gray-300 py-2 px-3 rounded-md focus:outline-none"
                        placeholder=""
                        name=""
                      />
                    </div>
                  </>
                )}
                {/* End Adding form */}
              </div>
              <div className="flex gap-10 mt-5">
                <div className="flex flex-col w-full relative">
                  <label htmlFor="" className="font-medium mb-2">
                    Jenis Surat
                  </label>

                  <div
                    className="bg-gray-200 px-3 py-2 rounded-md text-center cursor-pointer"
                    onClick={() => setActiveTypeLetter(!activeTypeLetter)}
                  >
                    {textJenis}
                  </div>

                  <motion.ul
                    className={`${
                      activeTypeLetter ? "block" : "hidden"
                    } bg-slate-100 rounded-md absolute w-full top-20 overflow-hidden z-40`}
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0,
                      y: { type: "spring", stiffness: 100 },
                      opacity: { duration: 1 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                  >
                    {menusSurat.map((data) => (
                      <li
                        key={data.id}
                        className="hover:bg-primary px-3 hover:text-white py-1 transition-all duration-100"
                        onClick={() =>
                          handleDropJenis({
                            category:data.category,
                            title: data.nama,
                            addForm: data.addForm,
                            formType: data.nama,
                          })
                        }
                      >
                        {data.nama}
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </div>

              {/* Adding form */}
              {formType === "SURAT HIBAH" && (
                <SuratHibahComponent
                  title="Pihak Yang di Hibahkan"
                  addForm={addForm}
                />
              )}
              {formType === "SURAT JUAL BELI" && (
                <SuratJualBeliComponent
                  title="Pihak Pembeli"
                  addForm={addForm}
                />
              )}
              {formType === "SURAT KETERANGAN KEMATIAN" && (
                <SuratKetKematianComponent
                  title="Yang Meninggal :"
                  addForm={addForm}
                />
              )}
              {formType === "SURAT KETERANGAN MENIKAH" && (
                <SuratKetMenikahComponent
                  title="Pihak Wanita"
                  addForm={addForm}
                />
              )}
              {formType === "SURAT KUASA" && (
                <SuratKuasaComponent
                  title="Yang Diberi Kuasa"
                  addForm={addForm}
                />
              )}
              {formType === "SURAT SKPT" && (
                <SuratSKPTComponent title="" addForm={addForm} />
              )}
              {/* End Adding form */}

              <div className="mt-10 flex justify-end">
                <button type="submit" className="bg-primary uppercase py-1 px-8 font-bold text-white rounded-md shadow-md">
                  kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
}
