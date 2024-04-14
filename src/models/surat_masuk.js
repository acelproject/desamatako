import mongoose, { Schema } from "mongoose";

const suratMasukSchema = new Schema(
  {
    nama: String,
    nik: String,
    noWa: String,
    alamat: String,
    ktp: String,
    kk: String,
    surat: String,
    jenisSurat: String,
    status: String,
  },
  { timestamps: true }
);

const SuratMasuk =
  mongoose.models.SuratMasuk || mongoose.model("SuratMasuk", suratMasukSchema);

export default SuratMasuk;
