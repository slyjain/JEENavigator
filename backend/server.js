const express=require("express");
const app=express();
const dotenv=require("dotenv")
dotenv.config();

const PORT=process.env.PORT;
app.get("/get",(req,res)=>{
    res.status(200).json({
        message:"JEE NAVIGATOR is connected"
    })
})
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
    
})