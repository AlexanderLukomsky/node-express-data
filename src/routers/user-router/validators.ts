import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validationUserRequiredKeys = [
  body(["birthday", "address"])
    .isObject()
    .withMessage("must be object type")
    .bail(),

  body([
    "name",
    "lastName",
    "birthday.day",
    "birthday.month",
    "birthday.year",
    "address.country",
    "address.city",
  ])
    .exists()
    .withMessage("required")
    .bail(),
];

export const validationUser = [
  body(["name", "lastName", "address.country", "address.city"])
    .isString()
    .withMessage("must be typeof string")
    .bail()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("can not be empty!")
    .bail()
    .isLength({ min: 1, max: 30 })
    .withMessage("must be a minimum length between 1 and 30")
    .bail(),
  body(["birthday.day", "birthday.month", "birthday.year"])
    .notEmpty()
    .withMessage("can not be empty!")
    .bail()
    .not()
    .isString()
    .withMessage("must be a number type")
    .bail()
    .isInt()
    .withMessage("must be a integer")
    .bail()
    .isLength({ min: 1, max: 4 })
    .withMessage("must be a minimum length between 1 and 4")
    .bail(),
];

export const validationUserRedundantKeys = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    res.status(400).json({ errors: validationErrors.array() });
    return;
  }

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
      error:
        "object includes redundant parameters, must be name, lastName, birthday, address, id is optional",
    });
    return;
  }

  for (const key in scheme) {
    if (body[key]) {
      if (key === "birthday" || key === "address") {
        const schemeKeyKeys = Object.keys(scheme[key]);
        const bodyKeyKeys = Object.keys(body[key]);

        const errorMessage =
          key === "birthday"
            ? "object includes redundant parameters, must be day, month and year"
            : "object includes redundant parameters, must be country and city";

        if (schemeKeyKeys.length < bodyKeyKeys.length) {
          errors.push({
            [key]: errorMessage,
          });
          break;
        }
      }
    }
  }

  if (errors.length) {
    res.status(400).json({ errors });
  } else {
    next();
  }
};
