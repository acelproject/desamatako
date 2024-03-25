import React from "react";
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
    idKel: dataPenduduk[0].idKel,
    nama: "Yohanes Marchel",
    hubungan: "Kepala Keluarga",
    nik: "72011800000004",
    jenisKelamin: "laki-laki",
  },
  {
    id: "2",
    idKel: dataPenduduk[0].idKel,
    nama: "Ishak",
    hubungan: "Kakak Pertama",
    nik: "72011800000006",
    jenisKelamin: "laki-laki",
  },
  {
    id: "1",
    idKel: dataPenduduk[1].idKel,
    nama: "Andreas Suge",
    hubungan: "Kepala Keluarga",
    nik: "720118000000010",
    jenisKelamin: "laki-laki",
  },
  {
    id: "2",
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
          kode keluarga : {dataPenduduk[params.anggotaKeluarga[0]]?.idKel}
        </div>
        <div>
          nama kepala keluarga :
          {dataPenduduk[params.anggotaKeluarga[0]]?.kepalaKeluarga}
        </div>
        <div>DAFTAR ANGGOTA KELUARGA</div>

        <div>
          {anggotaKelarga.map((e, i) => (
            <div key={i}>
              <div className="font-bold">{e.id}</div>
              <div className="font-bold">
                nama : <span className="font-normal">{e.nama}</span>
              </div>
              <div className="font-bold">
                hubungan dalam keluarga :{" "}
                <span className="font-normal"> {e.hubungan}</span>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataKeluarga;
