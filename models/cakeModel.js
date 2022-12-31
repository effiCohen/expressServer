import mongoose from "mongoose";

const cakeSchema= new mongoose.Schema({
    name:String,
    price:Number,
    category:String
})

export const cakeModel= mongoose.model("cakes",cakeSchema)