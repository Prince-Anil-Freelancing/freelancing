import express from "express";
import { getData, Create, Delete, Total } from "./contactController.js";
import { ContactValidator } from "../validation/contactValidation.js";
import { ValidationReq } from "../middleware/validationReq.js";
import AuthTokenExist from "../middleware/authTokenExist.js";
const contactRouter = express.Router();

// routes
// get --- http://localhost:3000/api/contacts
contactRouter.get("/", AuthTokenExist, getData);
// total --- http://localhost:3000/api/contacts/total/contact
contactRouter.get("/total/contact", AuthTokenExist, Total);
// create --- http://localhost:3000/api/contacts/message
contactRouter.post("/message", [ContactValidator, ValidationReq], Create);
// delete --- http://localhost:3000/api/contacts/delete/:id
contactRouter.delete("/delete/:id", AuthTokenExist, Delete);
export default contactRouter;
