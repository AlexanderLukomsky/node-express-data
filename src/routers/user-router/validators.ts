import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";

export const validateUserType = [
  body().isObject().withMessage("must be object type"),
  body(["birthday", "address"])
    .isObject()
    .withMessage("must be object type")
    .bail(),
];

export const validateUser = [
  body(["name", "lastName"])
    .isString()
    .withMessage("name and lastName must be typeof string")
    .bail()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("name and lastName can not be empty!")
    .bail()
    .isLength({ min: 1, max: 30 })
    .withMessage("value must be a minimum length between 1 and 30")
    .bail(),
  body(["birthday.day", "birthday.month", "birthday.year"])
    .notEmpty()
    .withMessage("value is required")
    .bail()
    .not()
    .isString()
    .withMessage("value must be a number type")
    .bail()
    .isInt()
    .withMessage("value must be a integer")
    .bail()
    .isLength({ min: 1, max: 4 })
    .withMessage("value must be a minimum length between 1 and 4")
    .bail(),
  body(["address.country", "address.city"])
    .trim()
    .escape()
    .notEmpty()
    .withMessage("country and city can not be empty!")
    .bail()
    .isLength({ min: 1, max: 30 })
    .withMessage("value must be a minimum length between 1 and 30")
    .bail(),
];

export const validateUserKeys = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  const errors: { [key: string]: string }[] = [];
  const scheme = {
    name: "string",
    lastName: "string",
    birthday: {
      day: "number",
      month: "number",
      year: "number",
    },
    address: { country: "string", city: "string" },
  };

  const schemeKey = Object.keys(scheme);
  const bodyKeysLength = Object.keys(body).length;

  if (schemeKey.length + 1 < bodyKeysLength) {
    res.status(400).json({
      error: "the object is too large, you are sending extra keys",
    });
    return;
  }

  for (const key in scheme) {
    if (body[key]) {
      if (key === "birthday") {
        const schemeBirthdayKeys = Object.keys(scheme["birthday"]);
        const bodyBirthdayKeys = Object.keys(body["birthday"]);

        if (schemeBirthdayKeys.length < bodyBirthdayKeys.length) {
          errors.push({
            [key]: "the object is too large, you are sending extra keys",
          });
          break;
        }
      }
      if (key === "address") {
        const schemeAddressKeys = Object.keys(scheme["address"]);
        const bodyAddressKeys = Object.keys(body["address"]);

        if (schemeAddressKeys.length < bodyAddressKeys.length) {
          errors.push({
            [key]: "the object is too large, you are sending extra keys",
          });
          break;
        }
      }
    } else {
      errors.push({ [key]: "required" });
    }
  }

  if (errors.length) {
    res.status(400).json({ errors });
  } else {
    next();
  }
};
