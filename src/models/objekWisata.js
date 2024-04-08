import mongoose, { Schema } from "mongoose";

const ObjekWisataSchema = new Schema(
  {
    wisata: String,
    lokasi: String,
    pengelola: String,
    img1: String,
    img2: String,
    img3: String,
  },
  { timestamps: true }
);

const ObjekWisata =
  mongoose.models.ObjekWisata || mongoose.model("ObjekWisata", ObjekWisataSchema);

export default ObjekWisata;
