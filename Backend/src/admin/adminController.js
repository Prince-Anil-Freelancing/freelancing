import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { Admin } from "./adminModel.js";
import AuthTokenGenerator from "../validation/authTokenGenerator.js";

const adminLogin = async (req, res, next) => {
  try {
    const { username, password } = await req.body;
    // admin exist check
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return next(createHttpError(400, "Admin not found"));
    }
    //     password check
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return next(createHttpError(401, "Invalid username or password"));
    }
    //     jwt authentication generator
    const token = await AuthTokenGenerator(admin._id);

    res.status(201).json({ success: true, token });
  } catch (error) {
    console.log(error.message);
    return next(createHttpError(500, "Admin Login Failed"));
  }
};

export { adminLogin };
