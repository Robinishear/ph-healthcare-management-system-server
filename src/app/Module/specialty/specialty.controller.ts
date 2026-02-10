// /* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const Payload = req.body;
  const Result = await SpecialtyService.createSpecialty(Payload);

  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Hello Robin brother, you have truly succeeded.",
    data: Result,
  });
});

const getAllSpecialties = catchAsync(async (req: Request, res: Response) => {
  const Result = await SpecialtyService.getAllSpecialties();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialties retrieved successfully.",
    data: Result,
  });
});

const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Result = await SpecialtyService.deleteSpecialty(id as string);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Specialty deleted successfully.",
    data: Result,
  });
});

const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Payload = req.body;
  const Result = await SpecialtyService.updateSpecialty(id as string, Payload);

  sendResponse(res, {
    httpStatusCode: 200,
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
