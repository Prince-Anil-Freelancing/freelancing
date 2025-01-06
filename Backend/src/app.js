import express from "express";
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import { config } from "./config/config.js";
import contactRouter from "./contact/contactRouters.js";
import adminRouter from "./admin/adminRouters.js";
const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: [config.userurl, config.adminurl],
    credentials: true,
    methods: ["GET", "POST", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to P&A Freelancer");
});

// admin router
app.use("/api/admin", adminRouter);

// conatct router
app.use("/api/contacts", contactRouter);

app.use(globalErrorHandler);
export default app;
