import React from "react";
const dataPenduduk = [
  {
    id: 1,
    idKel: "lumimpah123",
    nama: "Yohanes Marchel",
    nik: "720118054100001",
    tempat: "Dusun 8",
    ttl: "Palu,11 maret 2000",
    umur: 16,
    kelamin: "laki-laki",
    pekerjaan: "petani",
    keterangan: "kosong",
  },
  {
    id: 2,
    idKel: "suge321",
    nama: "Andreas Suge",
    nik: "720118054100002",
    tempat: "Dusun 5",
    ttl: "Palu,11 maret 1996",
    umur: 16,
    kelamin: "laki-laki",
    pekerjaan: "petani",
    keterangan: "kosong",
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
        <div>kode keluarga : {dataPenduduk[params.anggotaKeluarga[0]].nik}</div>
        <div>
          nama kepala keluarga :{dataPenduduk[params.anggotaKeluarga[0]].nama}
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
