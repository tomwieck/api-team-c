import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
} from "sequelize";
import { dbCache } from "../database/cache";

export class Cache1Day extends Model
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
		sequelize: dbCache,
	}
);

(async () => {
	await Cache1Day.sync({force:true});
}) ();


