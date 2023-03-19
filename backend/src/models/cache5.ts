import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
} from "sequelize";

import { cacheDb } from "../database/database";

export class Cache5Day extends Model
// <
// 	InferAttributes<Cache>,
// 	InferCreationAttributes<Cache>
// > 
{
	declare id: string;
	declare json: string;
	declare public readonly updatedAt: Date;
} [];

Cache5Day.init(
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		json: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
	},
	{
		modelName: "cache5",
		sequelize: cacheDb,
	}
);

(async () => {
	await Cache5Day.sync({force:true});
}) ();
