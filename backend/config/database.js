const mongoose=require("mongoose");

const connectDB=async()=>{
try {

    const connect=await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongoDB connected :${connect.connection.host}`);
    
} catch (error) {
    console.log(`Error:${error.message}`);
    process.exit();

}
    
};
module.exports=connectDB;