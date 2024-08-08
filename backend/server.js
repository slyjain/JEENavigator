const express=require("express");
const app=express();
const cors = require('cors');
const dotenv=require("dotenv");
dotenv.config();
app.use(cors()); 
const PORT=process.env.PORT;


app.get("/api/questions",(req,res)=>{
    res.status(200).json({
        message:"JEE NAVIGATOR is connected"
    })})


app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
    
})