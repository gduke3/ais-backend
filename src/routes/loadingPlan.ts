import { Router } from "express";
import { authGuard } from "../middlewares/authGuard";
import { transformResponse } from "../helpers/transformResponse";
import { LoadingPlan } from "../sequelize/models/LoadingPlan";

const router = Router();

router.get("/api/loading-plan/all", authGuard, async (req, res) => {
	const loadingPlans = await LoadingPlan.findAll();
	res.send(transformResponse(loadingPlans));
});

router.get("/api/loading-plan/:id", authGuard, async (req, res) => {
	const loadingPlan = await LoadingPlan.findOne({ where: { id: Number(req.params.id) } });
	res.send(transformResponse(loadingPlan));
});

router.post("/api/loading-plan", authGuard, async (req, res) => {
	const { vehicleId } = req.body || {};
	const loadingPlan = await LoadingPlan.create({ vehicleId, loginId: req.auth?.loginId } as any);
	res.send(transformResponse(loadingPlan));
});

router.delete("/api/loading-plan/:id", authGuard, async (req, res) => {
	const loadingPlan = await LoadingPlan.destroy({ where: { id: Number(req.params.id) } });
	res.send(transformResponse(loadingPlan));
});

export default router;
