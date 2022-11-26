import { Router, Request, Response } from "express";
import { validationMiddleware } from "../../middleware";

import { usersRepository } from "../../repositories/users-repository";
import { validateUser, validateUserKeys, validateUserType } from "./validators";

export const usersRouter = Router({});

usersRouter.get("/", async (req: Request, res: Response) => {
  const queryName = req.query.name?.toString();
  const foundUsers = await usersRepository.findUsers(queryName);
  res.send(foundUsers);
});

usersRouter.get("/:id", async (req: Request, res: Response) => {
  const paramsId = +req.params.id;
  const foundUsers = await usersRepository.findUserById(paramsId);

  if (foundUsers) {
    res.send(foundUsers);
    return;
  }

  res.send(404);
});

usersRouter.put(
  "/:id",
  validateUserType,
  validateUserKeys,
  validateUser,
  validationMiddleware,
  async (req: Request, res: Response) => {
    const id = +req.params.id;
    const isUpdated = await usersRepository.updateUser(id, req.body);
    if (isUpdated) {
      const updatedUser = await usersRepository.findUserById(id);
      res.send(updatedUser);
      return;
    }
    res.send(404);
  }
);

usersRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = +req.params.id;
  const isDeleted = await usersRepository.deleteUser(id);
  if (isDeleted) {
    res.send(204);
  } else {
    res.send(404);
  }
});

usersRouter.post(
  "/",
  validateUserType,
  validationMiddleware,
  validateUserKeys,
  validateUser,
  validationMiddleware,
  async (req: Request, res: Response) => {
    const newUser = await usersRepository.createUser(req.body);
    res.send(newUser);
  }
);
