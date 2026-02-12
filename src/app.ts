import { Application, Request, Response } from "express";
import express from "express";
import { prisma } from "./app/lib/prisma";
import { IndexRoute } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const specialty = await prisma.specialty.create({
    data: {
      title: "Cardiology robin ",
    },
  });
  res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: specialty,
  });
});

//* Mount the index route
app.use("/api/v1/", IndexRoute);

// * Global Error Handler Middleware and Not Found Middleware
app.use(globalErrorHandler);
app.use(notFound);
export default app;
