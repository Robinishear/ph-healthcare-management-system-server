import { Response } from "express";

//* Global API Response Wrapper" BA "API Response Utility Function
interface IResponseData<T> {
  httpStatusCode: number;
  success: boolean;
  message: string;
  data?: T;
}

export const sendResponse = <T>(
  res: Response,
  responseData: IResponseData<T>,
) => {
  const { httpStatusCode, success, message, data } = responseData;

  res.status(httpStatusCode).json({
    success,
    message,
    data,
  });
};
