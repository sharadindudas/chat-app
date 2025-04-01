import { Router } from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", protectRoute, getUsersForSidebar);

export default userRouter;
