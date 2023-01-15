import { validationMiddleware } from "./../../middleware/validationMiddleware";
import { productRepository } from "./../../repositories/products-repository/products-repository";
import { Router, Request, Response } from "express";
import { validationRequestBodyObjectType } from "../../middleware";
import {
  validationCreatedProduct,
  validationUpdatedProduct,
} from "./validators";

export const productsRouter = Router({});

productsRouter.get("/", async (req: Request, res: Response) => {
  const queryValue = req.query.value?.toString();
  const products = await productRepository.findProduct(queryValue);
  res.send(products);
});

productsRouter.get("/:id", async (req: Request, res: Response) => {
  const id = +req.params.id;
  const foundProduct = await productRepository.findProductById(id);
  if (foundProduct) {
    res.send(foundProduct);
    return;
  }
  res.sendStatus(404);
});

productsRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = +req.params.id;
  console.log(id);
  const isDeleted = await productRepository.deleteProduct(id);
  if (isDeleted) {
    res.sendStatus(204);
    return;
  }
  res.sendStatus(404);
});

productsRouter.put(
  "/:id",
  validationRequestBodyObjectType,
  validationMiddleware,
  validationUpdatedProduct,
  validationMiddleware,
  async (req: Request, res: Response) => {
    const id = +req.params.id;
    const data = req.body;
    const isUpdatedProduct = await productRepository.updateProduct(id, data);
    if (isUpdatedProduct) {
      const updatedProduct = await productRepository.findProductById(id);
      res.send(updatedProduct);
      return;
    }
    res.sendStatus(404);
  }
);

productsRouter.post(
  "/",
  validationRequestBodyObjectType,
  validationMiddleware,
  validationCreatedProduct,
  validationMiddleware,
  async (req: Request, res: Response) => {
    const data = req.body;
    const newProduct = await productRepository.createProduct(data);
    res.status(201).send(newProduct);
  }
);
