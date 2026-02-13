import { Router } from "express";
import { UserController } from "./user.controller";

const router =Router();

router .post("/doctor", UserController.createDoctor);

export const UserRoute = router;