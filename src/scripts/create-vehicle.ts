import minimist from "minimist";

import { Vehicle } from "../sequelize/models/Vehicle";
import { connect } from "../sequelize";

const args = minimist(process.argv);

connect().then(() => {
	Vehicle.create({
		weight: args.weight,
		width: args.width,
		height: args.height,
		depth: args.depth,
	} as any).then(() => {
		console.log("Created");
	});
});
