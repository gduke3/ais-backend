import {
	Model,
	Table,
	Column,
	DataType,
	HasOne,
	ForeignKey,
	BelongsTo,
} from "sequelize-typescript";

import { Login } from "./Login";
import { Vehicle } from "./Vehicle";

@Table
export class LoadingPlan extends Model<LoadingPlan> {
	@ForeignKey(() => Vehicle)
	@Column(DataType.INTEGER)
	vehicleId!: number;

	@ForeignKey(() => Login)
	@Column(DataType.INTEGER)
	loginId!: number;

	@BelongsTo(() => Vehicle)
	vehicle!: Vehicle;
}
