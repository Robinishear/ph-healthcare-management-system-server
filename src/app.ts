import { Application, Request, Response } from "express";
import express from "express";
import { prisma } from "./app/lib/prisma";
import { IndexRoute } from "./app/routes";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//* Mount the index route
app.use("/api/v1/", IndexRoute);

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

export default app;
