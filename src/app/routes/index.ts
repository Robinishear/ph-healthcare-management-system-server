import { Router } from "express";
import { SpecialtyRoute } from "../module/specialty/specialty.route";
import { AuthRoutes } from "../module/auth/auth.route";
import { UserRoute } from "../module/user/user.route";


const router = Router();
router.use("/auth", AuthRoutes);
router.use("/specialty", SpecialtyRoute);
router.use("/user", UserRoute);

export const IndexRoute = router;
