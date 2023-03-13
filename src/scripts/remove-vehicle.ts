import minimist from "minimist";

import { Vehicle } from "../sequelize/models/Vehicle";
import { connect } from "../sequelize";

const args = minimist(process.argv);

connect().then(() => {
	Vehicle.destroy({ where: { id: args.id } }).then(() => {
		console.log("deleted");
	});
});
