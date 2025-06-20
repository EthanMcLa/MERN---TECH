import express from "express"
import nodesRoutes from "./Routes/nodesroutes.js"
import {connectDB} from "./Config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./Middleware/rateLimiter.js"
import cors from "cors"

dotenv.config();



const app = express();

const port = process.env.PORT || 5002;

//MiddleWare
app.use(
    cors({
    origin: "http://localhost:5173",
})
);
app.use(express.json()); // This middleware will parse JSON bodies: req.body
// app.use(rateLimiter);  //This will be our middleware to make sure  there isn't an excessive amount of requests.

// app.use((req, res, next) => {
//     console.log("We just sent a request"); 
//     next();
// });

app.use("/api/notes", nodesRoutes);


connectDB().then(() => {
app.listen(port, () => {
    console.log("Server Started on port, 5002!");
})
});
