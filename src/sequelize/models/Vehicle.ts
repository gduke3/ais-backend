import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table
export class Vehicle extends Model<Vehicle> {
	@Column(DataType.INTEGER)
	weight!: number;

	@Column(DataType.INTEGER)
	width!: number;

	@Column(DataType.INTEGER)
	height!: number;

	@Column(DataType.INTEGER)
	depth!: number;
}
