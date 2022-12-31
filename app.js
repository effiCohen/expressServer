import express from "express"
import mongoose from "mongoose";
import { connectToMongoDB } from "./db/mongoConnect.js";
// גישה לנתיב של תיקייה כלשהי
import path from "path"
import { routesInit } from "./routes/configRoutes.js";

const app = express();
connectToMongoDB();
// נותן את הגישה לתגובה של גייסון מהשרת
app.use(express.json());

// server running on port:
const port = process.env.PORT || 3000;

routesInit(app)

app.listen(port, () => {
    console.log(`listening on ${port}`)
})