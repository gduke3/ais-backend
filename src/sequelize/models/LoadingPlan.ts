import {
	Model,
	Table,
	Column,
	DataType,
	HasOne,
	ForeignKey,
	BelongsTo,
	HasMany,
} from "sequelize-typescript";

import { Login } from "./Login";
import { Vehicle } from "./Vehicle";
import { Vehicle2LoadingPlan } from "./Vehicle2LoadingPlan";

@Table
export class LoadingPlan extends Model<LoadingPlan> {
	@ForeignKey(() => Login)
	@Column(DataType.INTEGER)
	loginId!: number;

	@HasMany(() => Vehicle2LoadingPlan)
	vehicle2LoadingPlans!: Vehicle2LoadingPlan[];
}
