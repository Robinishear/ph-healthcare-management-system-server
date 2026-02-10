/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";
import { SpecialtyService } from "./specialty.service";


//* Higher-Order Function (HOF)।,catchAsync Utility Function  Async Wrapper।
const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error: any) {
   
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }; 
};

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const Payload = req.body;
  const Result = await SpecialtyService.createSpecialty(Payload);

  res.status(201).json({
    success: true,
    message: "Hello Robin brother, you have truly succeeded.",
    data: Result,
  });
});

const getAllSpecialties = catchAsync(async (req: Request, res: Response) => {
  const Result = await SpecialtyService.getAllSpecialties();
  res.status(200).json({
    success: true,
    message: "Specialties retrieved successfully.",
    data: Result,
  });
});

const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Result = await SpecialtyService.deleteSpecialty(id as string);
  res.status(200).json({
    success: true,
    message: "Specialty deleted successfully.",
    data: Result,
  });
});

const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Payload = req.body;
  const Result = await SpecialtyService.updateSpecialty(id as string, Payload);

  res.status(200).json({
    success: true,
    message: "Specialty updated successfully.",
    data: Result,
  });
});

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialty,
};

