import express from "express";
import { json } from "body-parser";
import { DateRouter } from "./routes/date";
import { NoDateRouter } from "./routes/noDate";
var cors = require("cors");
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(NoDateRouter);
app.use(DateRouter);
app.use(json());
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});



export { app };