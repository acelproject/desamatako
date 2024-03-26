import React from "react";
import TableAnggotaKeluarga from "./TableAnggotaKeluarga";
const dataPenduduk = [
  {
    id: 1,
    // ak: "kosong",
    // kk: "kosong",
    // ddk: "kosong",
    idKel: "lumimpah123",
    kepalaKeluarga: "Yohanes Marchel",
    alamat: "kosong",
    rw: "kosong",
    rt: "kosong",
    dusun: "Dusun 8",
    bulan: "maret",
    tahun: "2024",
    pengisi: "ksong",
    pekerjaan: "petani",
    jabatan: "kosong",
    sumberData: "kosong",
  },
  {
    id: 2,
    // ak: "kosong",
    // kk: "kosong",
    // ddk: "kosong",
    idKel: "suge55",
    kepalaKeluarga: "Andreas Suge",
    alamat: "kosong",
    rw: "kosong",
    rt: "kosong",
    dusun: "Dusun 8",
    bulan: "maret",
    tahun: "2024",
    pengisi: "ksong",
    pekerjaan: "petani",
    jabatan: "kosong",
    sumberData: "kosong",
  },
];

const daftarKeluarga = [
  {
    id: "1",
    tanggal: "11/03/2024",
    noUrut: "5",
    noAkteKel: "27773884664909",
    tempatLahir: "Palu",
    tanggalLahir: 11,
    umur: 24,
    agama: "Kristen",
    golDarah: "A",
    tanggalCatat: "12/04/2024",
    statusKawin: "Belum Menikah",
    idKel: dataPenduduk[0].idKel,
    nama: "Yohanes Marchel",
    hubungan: "Kepala Keluarga",
    nik: "72011800000004",
    jenisKelamin: "laki-laki",
    negara:"Indonesia"
  },
  {
    id: "2",
    tanggal: "11/03/2024",
    noUrut: "5",
    noAkteKel: "27773884664909",
    tempatLahir: "Palu",
    tanggalLahir: 11,
    umur: 24,
    agama: "Kristen",
    golDarah: "A",
    tanggalCatat: "12/04/2024",
    statusKawin: "Belum Menikah",
    idKel: dataPenduduk[0].idKel,
    nama: "Ishak",
    hubungan: "Kakak Pertama",
    nik: "72011800000006",
    jenisKelamin: "laki-laki",
    negara:"Indonesia"
  },
  {
    id: "3",
    idKel: dataPenduduk[1].idKel,
    nama: "Andreas Suge",
    hubungan: "Kepala Keluarga",
    nik: "720118000000010",
    jenisKelamin: "laki-laki",
  },
  {
    id: "4",
    idKel: dataPenduduk[1].idKel,
    nama: "Natan",
    hubungan: "Kakak Pertama",
    nik: "72011800000009",
    jenisKelamin: "laki-laki",
  },
];
type AnggotaKeluargaProps = {
  params: { anggotaKeluarga: string };
};
const DataKeluarga = (props: AnggotaKeluargaProps) => {
  const { params }: any = props;
  // console.log(params)

  const anggotaKelarga = daftarKeluarga.filter(
    (e) => e.idKel === params.anggotaKeluarga[1]
  );
  return (
    <div>
      <div>
        <div>
          <TableAnggotaKeluarga
            anggotaKeluarga={anggotaKelarga}
            kodeKeluarga={dataPenduduk[params.anggotaKeluarga[0]]?.idKel}
            kepalaKeluarga={
              dataPenduduk[params.anggotaKeluarga[0]]?.kepalaKeluarga
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DataKeluarga;
