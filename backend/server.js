const express=require("express");
const app=express();
const dotenv=require("dotenv")
dotenv.config();
const PORT=process.env.PORT;
app.get("/",(req,res)=>{
    res.status(200).send("JEENavigator is ONNNNN")
})
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
    
})