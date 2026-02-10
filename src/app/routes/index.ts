import { Router } from "express";
import { SpecialtyRoute } from "../module/specialty/specialty.route";
import { AuthRoutes } from "../module/auth/auth.route";


const router = Router();
router.use("/auth", AuthRoutes);
router.use("/specialty", SpecialtyRoute);

export const IndexRoute = router;
