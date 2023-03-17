import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
} from "sequelize";
import { sequelize } from "../database/database";

export class City extends Model<
	InferAttributes<City>,
	InferCreationAttributes<City>
> {
	declare bookId: CreationOptional<number>;
	declare title: string;
	declare author: string;
	declare description: string;
}

// City.init( {
// 	cityName: {
// 		type: DataTypes.STRING,
// 		allowNull: false,
// 		primaryKey: true,
// 	}
// 	latitude: {
// 		type: DataTypes.FLOAT // from https://sequelize.org/docs/v7/other-topics/other-data-types/
// 	}

// }

// OneDayForecast.init(
// 	{
// 		bookId: {
// 			type: DataTypes.INTEGER,
// 			allowNull: false,
// 			primaryKey: true,
// 		},
// 		title: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 		},
// 		author: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 		},
// 		description: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 		},
// 	},
// 	{
// 		modelName: "Book",
// 		timestamps: true,
// 		sequelize: sequelize,
// 	}
// );
