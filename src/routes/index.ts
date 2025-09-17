import { Request, Response, Router } from "express";
import { authRouter } from "./auth.router";

export const routerApp = Router();

routerApp.use("/auth", authRouter);

routerApp.use((request: Request, response: Response) => {
  response.status(404).render("404");
});
