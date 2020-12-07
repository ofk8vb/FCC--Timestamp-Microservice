import express from "express";
import { json } from "body-parser";
import { DateRouter } from "./routes/date";

const app = express();

app.use(json());

app.use(DateRouter);

export { app };
