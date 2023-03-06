import { Router } from "express";
import { authGuard } from "../middlewares/authGuard";
import { transformResponse } from "../helpers/transformResponse";
import { Vehicle } from "../sequelize/models/Vehicle";

const router = Router();

router.get("/api/vehicle/all", authGuard, async (req, res) => {
	const vehicles = await Vehicle.findAll();
	res.send(transformResponse(vehicles));
});

router.get("/api/vehicle/:id", authGuard, async (req, res) => {
	const vehicle = await Vehicle.findOne({ where: { id: Number(req.params.id) } });
	res.send(transformResponse(vehicle));
});

router.post("/api/vehicle", authGuard, async (req, res) => {
	const { weight, width, height, depth } = req.body || {};
	const vehicle = await Vehicle.create({ weight, width, height, depth } as any);
	res.send(transformResponse(vehicle));
});

router.delete("/api/vehicle/:id", authGuard, async (req, res) => {
	const vehicle = await Vehicle.destroy({ where: { id: Number(req.params.id) } });
	res.send(transformResponse(vehicle));
});

export default router;
