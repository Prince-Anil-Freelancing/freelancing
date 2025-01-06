import express from "express";
import { adminLogin } from "./adminController.js";

const adminRouter = express.Router();
// router
// login -- http://localhost:3000/api/admin
adminRouter.post("/", adminLogin);

export default adminRouter;
