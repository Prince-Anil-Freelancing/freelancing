import { body } from "express-validator";

const ContactValidator = [
  body("name").trim().isLength({ min: 2, max: 30 }),
  body("email").trim().isEmail(),
  body("message").trim().isLength({ min: 10 }),
];

export { ContactValidator };
