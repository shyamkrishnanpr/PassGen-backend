import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const connectDatabase = async () => {
  try {
    const uri = await mongoose.connect('mongodb://127.0.0.1:27017/passwordGenerator', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (err) {
    console.log(`Database connection failed : ${err}`);

  }
};

export default  connectDatabase;