import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("conencct");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
