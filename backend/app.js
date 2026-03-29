import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import resumeAnalyseRouter from "./routes/analyseRoute.js";

const app = express();

// MIDDLEWARS
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// CORS
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(helmet({ crossOriginResourcePolicy: false }));

app.use(express.json());

// ROUTES
app.use("/analyse", resumeAnalyseRouter);

export default app;
