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
)

export class Cache1Day extends Model
// <
// 	InferAttributes<Cache>,
// 	InferCreationAttributes<Cache>
// > 
{
	declare id: string;
	declare json: string;
	declare public readonly updatedAt: Date;
} [];

Cache1Day.init(
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
		modelName: "cache1",
		sequelize: cacheDb,
	}
);

(async () => {
	await Cache1Day.sync({force:true});
	await Cache5Day.sync({force:true});
}) ();


