// Using Node.js `require()`
const mongoose = require('mongoose');
const mongoUrl=process.env.DATABASE_URL;
// Using ES6 imports
import mongoose from 'mongoose';
const connect=async()=>{
    await mongoose.connect(mongoUrl);
}

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Chapters = new Schema({
    chapterID: ObjectId,
    chapter_name:String,
    subject:String,
    description:String,
    order_number:Number,
});