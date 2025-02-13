import { SongsController } from "../controllers/";
import express, { Router, Request, Response } from "express";

const songsRouter: Router = express.Router();

songsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const resp = await SongsController.getByTitle(
      (req.query.title as string) ?? ""
    );

    res.json(resp);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occurred while fetching songs" });
  }
});

export { songsRouter };
