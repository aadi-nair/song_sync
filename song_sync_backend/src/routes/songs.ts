import { SongsController } from "../controllers/";
import express, { Router, Request, Response } from "express";

const songsRouter: Router = express.Router();

songsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const resp = await SongsController.getByTitle(req.query.title as string);

    res.json(resp);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: `${e}` });
  }
});

export { songsRouter };
