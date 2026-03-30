import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import resumeAnalyseRouter from "./routes/analyseRoute.js";
import { handleNotFoundError } from "./controllers/notFoundController.js";

const app = express();

// MIDDLEWARS
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// CORS
app.use(
  cors({
    origin: process.env.ALLOWED_DOMINS.split(","),
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(helmet({ crossOriginResourcePolicy: false }));

const limiter = rateLimit({
  max: 10,
  windowMs: 2 * 60 * 1000,
  message: "Too many requests from this IP, please try again after 10 munites",
});

app.use("/analyse", limiter);

app.use(express.json());

// ROUTES
app.use("/analyse", resumeAnalyseRouter);
app.use(handleNotFoundError);

export default app;
