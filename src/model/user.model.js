const mongoose=require("mongoose");

const userShema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true,versionKey:false});

const userModel=mongoose.model("user",userShema);

module.exports=userModel