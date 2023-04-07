import cors from "cors";
import * as dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { meRouter } from "./routers/me-router";
import { usersRouter } from "./routers/user-router";
import { productsRouter } from "./routers/product-router";

dotenv.config();

const app = express();

app.use(
  cors({
    allowedHeaders: [
      "Access-Control-Allow-Headers",
      "X-Requested-With, content-type",
      "Access-Control-Allow-Credentials",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
    ],
    credentials: true,
    origin: "http://localhost:3000",
  })
);

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const startMessage = "data start";
  res.send(startMessage);
});

app.get("/favicon.ico", (req, res) => res.status(204));

app.use((req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.get("API-KEY");

  if (!apiKey || apiKey !== process.env.API_KEY) {
    res.status(401).json({ error: "unauthorized" });
  } else {
    next();
  }
});

app.use("/me-data", meRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

const startApp = async () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startApp();
