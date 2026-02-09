import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  const Payload = req.body;

  const Result = await SpecialtyService.createSpecialty(Payload);

  res.status(201).json({
    status: "Hello Robin brother, you have truly succeeded.",
    data: Result,
  });
};

export const SpecialtyController = {
  createSpecialty,
};
