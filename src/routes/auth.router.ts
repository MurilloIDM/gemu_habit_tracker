import { Request, Response, Router } from "express";

export const authRouter = Router();

authRouter.get("/login", (request: Request, response: Response) => {
  response.render("login");
});
