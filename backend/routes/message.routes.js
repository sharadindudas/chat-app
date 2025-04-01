import { Router } from "express";
import {
    receiveMessages,
    sendMessage
} from "../controllers/message.controller.js";
import protectRoute from "../middlewares/protectRoute.js";

const messageRouter = Router();
messageRouter.post("/send/:id", protectRoute, sendMessage);
messageRouter.get("/get/:id", protectRoute, receiveMessages);

export default messageRouter;
