import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
} from "sequelize";

import { dbDatabase } from "../database/database";

export class Settings extends Model
// <
//     InferAttributes<Favourite>, InferCreationAttributes<Favourite>
// >
{
    declare username: string;
    declare settings: string;
} [];

Settings.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            primaryKey: true
        },
        settings: {
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: false
        },
    },
    {
        modelName: "setting",
        sequelize: dbDatabase,
        timestamps: false
    }
);

(async () => {
    await Settings.sync({ alter: true });
})();
