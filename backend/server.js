import express from "express";
import dotenv from "dotenv";
import { connectMongoDB } from "./db/mongodb.js";
import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/users", userRouter);

server.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server running on PORT ${PORT}`);
});
