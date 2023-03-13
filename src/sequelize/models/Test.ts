import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Test extends Model<Test> {
	@Column(DataType.STRING)
	text!: string;
}
