import { Router, Request, Response } from "express";
import { meRepository } from "../../repositories/me-repository/me-repository";

export const meRouter = Router({});

meRouter.get("/", (req: Request, res: Response) => {
  const me = meRepository.getMe();
  res.send(me);
});
