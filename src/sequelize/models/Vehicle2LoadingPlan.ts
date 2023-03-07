import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";

import { Vehicle } from "./Vehicle";
import { LoadingPlan } from "./LoadingPlan";

@Table
export class Vehicle2LoadingPlan extends Model<Vehicle2LoadingPlan> {
	@ForeignKey(() => Vehicle)
	@Column(DataType.INTEGER)
	vehicleId!: number;

	@ForeignKey(() => LoadingPlan)
	@Column(DataType.INTEGER)
	loadingPlanId!: number;

	@BelongsTo(() => Vehicle)
	vehicle!: Vehicle;
}
