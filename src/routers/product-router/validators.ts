import { body, oneOf } from "express-validator";
export const validationUpdatedProduct = [
  body("id")
    .exists()
    .withMessage("required")
    .bail()
    .isInt()
    .withMessage("must be integer")
    .bail()
    .not()
    .isString()
    .withMessage("must be integer")
    .bail(),

  oneOf(
    [
      body("value")
        .isString()
        .withMessage("must be typeof string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("can not be empty")
        .bail()
        .isLength({ min: 1, max: 30 })
        .withMessage("must be a minimum length between 1 and 30")
        .bail(),
      body("made")
        .isString()
        .withMessage("must be typeof string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("can not be empty")
        .bail()
        .isLength({ min: 1, max: 30 })
        .withMessage("must be a minimum length between 1 and 30")
        .bail(),
      body("price")
        .notEmpty()
        .withMessage("can not be empty")
        .not()
        .isString()
        .withMessage("must be typeof number")
        .isNumeric()
        .withMessage("must be typeof number")
        .bail(),
      body("stock")
        .notEmpty()
        .withMessage("can not be empty")
        .bail()
        .not()
        .isString()
        .withMessage("must be typeof number")
        .bail()
        .isNumeric()
        .withMessage("must be typeof number")
        .bail(),
    ],
    "must contain all or one of the optional parameters: value, price, stock and/or made"
  ),
];

export const validationCreatedProduct = [
  body(["value", "made", "price", "stock"])
    .exists()
    .withMessage("required")
    .bail(),
  body(["value", "made"])
    .isString()
    .withMessage("must be typeof string")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("can not be empty")
    .bail()
    .isLength({ min: 1, max: 30 })
    .withMessage("must be a minimum length between 1 and 30")
    .bail(),
  body(["price", "stock"])
    .notEmpty()
    .withMessage("can not be empty")
    .bail()
    .not()
    .isString()
    .withMessage("must be typeof number")
    .bail()
    .isNumeric()
    .withMessage("must be typeof number")
    .bail(),
];
