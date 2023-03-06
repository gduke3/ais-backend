import { Router } from "express";
import { authGuard } from "../middlewares/authGuard";
import { transformResponse } from "../helpers/transformResponse";
import { Cargo } from "../sequelize/models/Cargo";

const router = Router();

router.get("/api/cargo/all", authGuard, async (req, res) => {
	const cargos = await Cargo.findAll();
	res.send(transformResponse(cargos));
});

router.get("/api/cargo/:id", authGuard, async (req, res) => {
	const cargo = await Cargo.findOne({ where: { id: Number(req.params.id) } });
	res.send(transformResponse(cargo));
});

router.post("/api/cargo", authGuard, async (req, res) => {
	const { width, height, depth, weight, loadingPlanId } = req.body || {};
	const cargo = await Cargo.create({ width, height, depth, weight, loadingPlanId } as any);
	res.send(transformResponse(cargo));
});

router.delete("/api/cargo/:id", authGuard, async (req, res) => {
	const cargo = await Cargo.destroy({ where: { id: Number(req.params.id) } });
	res.send(transformResponse(cargo));
});

export default router;
