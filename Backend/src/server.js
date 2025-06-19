import express from "express"
import nodesRoutes from "./Routes/nodesroutes.js"
import {connectDB} from "./Config/db.js"
import dotenv from "dotenv"

dotenv.config();



const app = express();

connectDB();

//MiddleWare
app.use(express.json());

app.use("/api/notes", nodesRoutes);

const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log("Server Started on port, 5002!");
});