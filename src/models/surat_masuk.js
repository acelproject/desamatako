import mongoose, { Schema } from "mongoose";

const suratMasukSchema = new Schema(
  {
    nama: String,
    nik: String,
    noWa: String,
    jenisSurat: String,
  },
  { timestamps: true }
);

const SuratMasuk =
  mongoose.models.SuratMasuk || mongoose.model("SuratMasuk", suratMasukSchema);

export default SuratMasuk;
