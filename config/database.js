import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const connectDatabase = async () => {
  try {
    const uri = await mongoose.connect(process.env.MONG_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (err) {
    console.log(`Database connection failed : ${err}`);
  }
};

export default connectDatabase;
