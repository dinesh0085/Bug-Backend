const express=require("express");
const userModel=require("../model/user.model");
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken");

const app=express.Router();

app.post("/signup",async(req,res)=>{
    const {email,password} = req.body;

    
     try{
        // let hashed;
        //  hashed=await bcrypt.hash(password, 10,async function(err, hash) {
        //    return hash
        // });
        // console.log(hashed);
        const user=new userModel({email,password});
        await user.save()
        res.status(201).send({msg:"User created Successfully"})
     }catch(e){
        res.send({msg:"Account Already Exists"})
     }
    
      

})

app.post("/login",async(req,res)=>{
    const {email,password} = req.body;

   try{
     const user=await userModel.findOne({email,password});
     console.log(user);
     if(user){
        const token=jwt.sign({id:user._id,email:user.email},"SECRETKEY",
        {
            expiresIn:"1 day"
        })
       res.status(201).send({msg:"Login Successful",token})
     }else{
        res.status(201).send({msg:"Invalid Credentials"})
     }
    }catch(e){
     res.status(400).send({msg:e.message})
    }
})


module.exports=app