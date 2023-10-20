import mongoose from "mongoose";

export const connectDB = async () => {
    try{ 
        await mongoose.connect("mongodb+srv://jinnomura2:juancalu21@cluster0.k03jous.mongodb.net/");
        console.log(">>> DB is conected");
    } catch (error) {
        console.log(error);
    }
   
};