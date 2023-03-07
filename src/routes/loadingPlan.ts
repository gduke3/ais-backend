import { Router } from "express";
import { authGuard } from "../middlewares/authGuard";
import { transformResponse } from "../helpers/transformResponse";
import { LoadingPlan } from "../sequelize/models/LoadingPlan";
import { Vehicle2LoadingPlan } from "../sequelize/models/Vehicle2LoadingPlan";
import { Vehicle } from "../sequelize/models/Vehicle";

const router = Router();

router.get("/api/loading-plan/all", authGuard, async (req, res) => {
	const loadingPlans = await LoadingPlan.findAll({
		include: [{ model: Vehicle2LoadingPlan, include: [Vehicle] }],
	});
	res.send(transformResponse(loadingPlans));
});

router.get("/api/loading-plan/:id", authGuard, async (req, res) => {
	const loadingPlan = await LoadingPlan.findOne({
		where: { id: Number(req.params.id) },
		include: [{ model: Vehicle2LoadingPlan, include: [Vehicle] }],
	});
	res.send(transformResponse(loadingPlan));
});

router.post("/api/loading-plan", authGuard, async (req, res) => {
	const { vehiclesIds = [] } = req.body || {};
	const loadingPlan = await LoadingPlan.create({ loginId: req.auth?.loginId } as any);
	await Vehicle2LoadingPlan.bulkCreate(
		vehiclesIds.map((vehicleId: string) => ({
			loadingPlanId: loadingPlan.id,
			vehicleId: Number(vehicleId),
		}))
	);
	res.send(transformResponse(loadingPlan));
});

router.delete("/api/loading-plan/:id", authGuard, async (req, res) => {
	const loadingPlan = await LoadingPlan.destroy({ where: { id: Number(req.params.id) } });
	res.send(transformResponse(loadingPlan));
});

export default router;
