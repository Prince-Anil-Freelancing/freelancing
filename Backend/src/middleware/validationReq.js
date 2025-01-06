import { validationResult } from "express-validator";

const ValidationReq = async (req, res, next) => {
  const result = await validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ success: false, error: result.array() });
  }
  next();
};

export { ValidationReq };
