import mongoose from "mongoose";
import { config } from "./config.js";
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connect to database Successfully");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Error connecting to databasee", err);
    });
    await mongoose.connect(config.databaseurl);
  } catch (error) {
    console.error("Failed to connect to database", error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectDB;
