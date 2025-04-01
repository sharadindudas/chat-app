import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, { dbName: "chat-app" });
        console.log("MongoDB is connected successfully");
    } catch (err) {
        console.log("Error while connecting to mongodb", err.message);
        process.exit(1);
    }
};
