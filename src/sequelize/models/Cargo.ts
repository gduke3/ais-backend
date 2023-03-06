import { Model, Table, Column, DataType, HasOne, ForeignKey } from "sequelize-typescript";

@Table
export class Cargo extends Model<Cargo> {
	@Column(DataType.INTEGER)
	weight!: number;

	@Column(DataType.INTEGER)
	width!: number;

	@Column(DataType.INTEGER)
	height!: number;

	@Column(DataType.INTEGER)
	depth!: number;
}
