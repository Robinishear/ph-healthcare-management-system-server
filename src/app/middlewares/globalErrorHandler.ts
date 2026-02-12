/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from "express";
import { envConfig } from "../../config/env";
import status from "http-status";

export const globalErrorHandler= (err: any, req: Request, res: Response, next: NextFunction) => {
 if(envConfig.NODE_ENV === "development") {
    console.error("Error from Global Error Handler :", err);
  }
  const statusCode: number = status.INTERNAL_SERVER_ERROR; 
  const message: string = "Internal Server Error";

    res.status(statusCode).json({
    success: false,
    message: message,
    error: err.message || "An unexpected error occurred",
    data: null,
  });
}