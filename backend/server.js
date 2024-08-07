const express=require("express");
const app=express();
const PORT=process.PORT;

app.listen(PORT,()=>{
    `listening on ${PORT}`
})