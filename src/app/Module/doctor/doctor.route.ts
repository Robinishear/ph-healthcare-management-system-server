import { Router } from "express";
import { DoctorController } from "./doctor.controller";

const router = Router();

router.get("/", DoctorController.getAllDoctors);
router.get("/:id", DoctorController.getDoctorById);
router.patch("/:id", DoctorController.updateDoctor);
router.delete("/:id", DoctorController.deleteDoctor);

export const DoctorRoutes = router;