const express=require('express')
require("dotenv").config();
const connect=require("./Database/dbConnect")
const userRouter=require("./route/user.route")
const cors=require("cors")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
 return res.send('Hello')
})

app.use("/user",userRouter)

app.listen(8080,async()=>{ 
  try{
   await connect()
   console.log("Database Connected");
  }catch(e){
   console.log(e);
  }
    console.log('Listening Server to Port 8080')
})