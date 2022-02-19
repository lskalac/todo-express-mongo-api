import Router from "express-promise-router";
import todoRouter from "./TaskRouter";

const router = Router();

router.use("/tasks", todoRouter);

export default router;