/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from "express";
import { envConfig } from "../config/env";
import status from "http-status";
import * as path from "node:path";
import z from "zod";
import { TErrorSource } from "../interfaces/error.interface";
import { handleZodError } from "../errorHelpers/handleZodError";
import { error } from "node:console";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (envConfig.NODE_ENV === "development") {
    console.error("Error from Global Error Handler :", err);
  }

  let errorSources: TErrorSource[] = [];
  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let message: string = "Internal Server Error";

  if (err instanceof z.ZodError) {
    const simplifiedZodError = handleZodError(err);
    statusCode = simplifiedZodError.statusCode as number;
    message = simplifiedZodError.message;
    errorSources = [...simplifiedZodError.errorSources!];
  }

  const errorResponse = {
    success: false,
    message,
    errorSources,
    error: envConfig.NODE_ENV === "development" ? err : undefined,
  };
  res.status(statusCode).json(errorResponse);
};
