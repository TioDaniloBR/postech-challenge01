import express, { NextFunction, Request, Response, Router } from "express";
export const router: Router = express.Router();

router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
  res.send("Success.");
});
