import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
  
  appName: {
      type:String, 
      required:[true, 'Please Add Name']
  },
  userName: {
    type:String, 
    required:[true, 'Please Add Name']
},

  password:{
       type: String,
       required:true,
  },


 
}, {timestamps: true})
const Password = mongoose.model("Password", passwordSchema);

export default Password;