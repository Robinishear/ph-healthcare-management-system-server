/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  try {
    const Payload = req.body;

    const Result = await SpecialtyService.createSpecialty(Payload);

    res.status(201).json({
      success: true,
      message: "Hello Robin brother, you have truly succeeded.",
      data: Result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the specialty.",
      error: error.message,
    });
  }
};

const getAllSpecialties = async (req: Request, res: Response) => {
  try {
    const specialty = await SpecialtyService.getAllSpecialties();
    res.status(200).json({
      success: true,
      message: "All specialties retrieved successfully.",
      data: specialty,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving all specialties.",
      error: error.message,
    });
  }
};

const deleteSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Result = await SpecialtyService.deleteSpecialty(id as string);
    res.status(200).json({
      success: true,
      message: "Specialty deleted successfully.",
      data: Result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the specialty.",
      error: error.message,
    });
  }
};

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
};
