import { Router } from "express";
import { SpecialtyRoute } from "../module/specialty/specialty.route";
import { AuthRoutes } from "../module/auth/auth.route";
import { UserRoute } from "../module/user/user.route";
import { DoctorRoutes } from "../module/doctor/doctor.route";

const router = Router();
router.use("/auth", AuthRoutes);
router.use("/specialty", SpecialtyRoute);
router.use("/users", UserRoute);
router.use("/doctors", DoctorRoutes);

export const IndexRoute = router;
