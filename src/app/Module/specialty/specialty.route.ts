import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";
import { Role } from "../../../generated/prisma/browser";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();

router.post("/", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.createSpecialty);
router.get("/", SpecialtyController.getAllSpecialties);
router.delete("/:id", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.deleteSpecialty);
router.put("/:id", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.updateSpecialty);

export const SpecialtyRoute = router;
