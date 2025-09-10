import { Router } from "express";
import { authRouter } from "./auth.router";

export const routerApp = Router();

routerApp.use("/auth", authRouter);
