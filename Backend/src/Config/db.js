import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch(err) {
        console.log("error connecting to mongoDB");
        process.exit(1); // Exits with a  failure 
        }
} 