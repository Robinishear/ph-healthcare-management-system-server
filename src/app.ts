import { Application, Request, Response } from "express";
import express from "express";
import { prisma } from "./app/lib/prisma";
// import { SpecialtyRoute } from "./app/Module/specialty/specialty.route";
import { IndexRoute } from "./app/routes";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());


//* Mount the index route
app.use("/api/v1/", IndexRoute);



// Basic route
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
