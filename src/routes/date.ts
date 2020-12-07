import express, { Request, Response } from "express";

const router = express.Router();

// //@ts-ignore
// Date.prototype.isValid = function(){
//   return this.getTime() === this.getTime();
// }

router.get("/api/timestamp/:date", (req: Request, res: Response) => {
    let dateFromParams = req.params.date
    console.log(dateFromParams)


    let date = new Date(parseInt(dateFromParams));
    let UTCTime = date.toUTCString();
 
    if(/\d{5,}/.test(dateFromParams)){
         res.json({ unix: JSON.parse(dateFromParams), utc: UTCTime });
    }

    let dateObject = new Date(dateFromParams);

    if(dateObject.toString()==="Invalid Date"){
      res.json({ error: "Invalid Date" });
    }else{
      res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
    }
  
  console.log(dateFromParams)


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

 
 
});

export { router as DateRouter };
