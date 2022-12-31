import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:String,
    age:Number,
    country:String
})

export const userModel= mongoose.model("users",userSchema)