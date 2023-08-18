import { Request, Response } from "express";
import { getCats } from "../services/cats.service";

const getCatsHandler = async (req: Request, res: Response) => {
  try {
    const { number } = req.params;
    const cats = await getCats(parseInt(number));
    return res.json(cats);
  } catch (error: any) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

const controller = { getCatsHandler };

export default controller;
