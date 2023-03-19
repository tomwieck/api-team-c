import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
} from "sequelize";

import { cacheDb } from "../database/database";

export class Cache extends Model
// <
// 	InferAttributes<Cache>,
// 	InferCreationAttributes<Cache>
// > 
{
	declare id: string;
	declare json: string;
	declare public readonly updatedAt: Date;
} [];

Cache.init(
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
		modelName: "cache",
		sequelize: cacheDb,
		// timestamps: true,
		// createdAt: false,
		// updatedAt: 'updatedAt'
	}
)

const cacheInit = async () => await Cache.sync({force:true});
cacheInit();

