import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import busboy from "connect-busboy";
import { expressjwt as jwt } from "express-jwt";

import authRouter from "./routes/auth";
import cargoRouter from "./routes/cargo";
import vehicleRouter from "./routes/vehicle";
import loadingPlanRouter from "./routes/loadingPlan";

import { connect } from "./sequelize";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(busboy());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jwt({ secret: "backend", algorithms: ["HS256"], credentialsRequired: false }));

connect();

app.use(loadingPlanRouter);
app.use(vehicleRouter);
app.use(cargoRouter);
app.use(authRouter);

app.listen(port, () => {
	console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
