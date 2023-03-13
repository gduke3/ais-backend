import { Sequelize } from "sequelize-typescript";

import { Vehicle2LoadingPlan } from "./models/Vehicle2LoadingPlan";
import { LoadingPlan } from "./models/LoadingPlan";
import { Vehicle } from "./models/Vehicle";
import { Cargo } from "./models/Cargo";
import { Login } from "./models/Login";
import { User } from "./models/User";
import { Test } from "./models/Test";

const sequelize = new Sequelize({
	port: 8889,
	dialect: "mysql",
	database: "ais",
	password: "root",
	username: "root",
	models: [User, Vehicle, LoadingPlan, Cargo, Login, Vehicle2LoadingPlan, Test],
});

export async function connect() {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}
