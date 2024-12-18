import mongoose from 'mongoose';

export const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI );
        console.log("DB connected");
    } catch (error) {
        console.log("Error in DB connection",error);
    }
}