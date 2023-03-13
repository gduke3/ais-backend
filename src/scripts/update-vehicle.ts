import minimist from "minimist";

import { Vehicle } from "../sequelize/models/Vehicle";
import { connect } from "../sequelize";

const args = minimist(process.argv);

connect().then(() => {
	Vehicle.update(
		{
			weight: args.weight,
			width: args.width,
			height: args.height,
			depth: args.depth,
		},
		{ where: { id: args.id } }
	).then(() => {
		console.log("updated");
	});
});
