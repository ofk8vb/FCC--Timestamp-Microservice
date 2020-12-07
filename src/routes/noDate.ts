import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/timestamp/", (req: Request, res: Response) => {
 
     const result = new Date();
    const UnixTime = result.getTime();
    const UTCTime = result.toUTCString();
    res.json({ unix: UnixTime, utc: UTCTime });
 
});

export { router as NoDateRouter };
