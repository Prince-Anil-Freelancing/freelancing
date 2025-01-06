import createHttpError from "http-errors";
import { Contact } from "./contactModel.js";
import { Admin } from "../admin/adminModel.js";

const getData = async (req, res, next) => {
  try {
    const auth = await req.user;
    const admin = await Admin.findOne({ _id: auth });
    if (!admin) {
      return next(createHttpError(404, "Admin not found"));
    }
    const contact = await Contact.find().sort("-_id");
    if (!contact || contact.length == 0) {
      return next(createHttpError(404, "Contact not found"));
    }
    res.status(200).json({ success: true, contact });
  } catch (error) {
    console.log(error.message);
    return next(createHttpError(500, error.message));
  }
};

const Total = async (req, res, next) => {
  try {
    const total = await Contact.find();
    if (!total || total.length === 0) {
      return next(createHttpError(404, "Contact total not found"));
    }
    res.status(200).json({ success: true, total: total.length });
  } catch (error) {
    console.log(error.message);
    return next(createHttpError(500, "Contact total getting Failed"));
  }
};

const Create = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    if (name === null || email === null || message === null) {
      return next(createHttpError(404, "All Field is required"));
    }
    const contact = await Contact.create({
      name: name,
      email: email,
      message: message,
    });
    if (!contact || contact == null) {
      return next(createHttpError(404, "message send failed"));
    }
    res.status(201).json({ success: true, contact: contact._id });
  } catch (error) {
    console.log(error.message);
    return next(createHttpError(500, "contact creation failed"));
  }
};

const Delete = async (req, res, next) => {
  try {
    const auth = await req.user;
    const admin = await Admin.findOne({ _id: auth });
    if (!admin) {
      return next(createHttpError(404, "Admin not found"));
    }
    const id = await req.params.id;
    let contact = await Contact.findOne({ _id: id }).select("_id");
    if (!contact) {
      return next(createHttpError(404, "contact not found"));
    }
    contact = await Contact.findByIdAndDelete(
      { _id: id },
      { new: true }
    ).select("_id");
    if (!contact) {
      return next(createHttpError(400, "contact deletion not found"));
    }
    res.status(200).json({ success: true, contact });
  } catch (error) {
    console.log(error.message);
    return next(createHttpError(500, "contact deletion failed"));
  }
};
export { getData, Total, Create, Delete };
