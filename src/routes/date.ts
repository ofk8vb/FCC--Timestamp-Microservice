import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/timestamp/:date", (req: Request, res: Response) => {
  const dateFromParams = JSON.parse(req.params.date);

  if (dateFromParams === "") {
    const result = new Date();
    const UnixTime = result.getTime();
    const UTCTime = result.toUTCString();
    res.send({ unix: UnixTime, utc: UTCTime });
  }

  // if (Object.prototype.toString.call(dateFromParams) === "[object Date]") {
  //   // it is a date
  //   if (isNaN(dateFromParams.getTime())) {
  //     res.json({ error: "Invalid Date" });
  //   } else {
  //     return;
  //   }
  // } else {
  //   res.json({ error: "Invalid Date" });
  // }

  const date = new Date(dateFromParams);
  const UnixTime = date.getTime();
  const UTCTime = date.toUTCString();
  res.json({ unix: UnixTime, utc: UTCTime });
});

export { router as DateRouter };
