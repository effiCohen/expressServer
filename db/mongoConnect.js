import mongoose from "mongoose";
 export const connectToMongoDB = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect('mongodb://localhost:27017/myApp', {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }, () => console.log("MongoDb Connect..."));
}




