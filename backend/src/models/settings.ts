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
    declare settings: string;
} [];

Settings.init(
    {
        settings: {
            type: DataTypes.TEXT,
            allowNull: true,
            primaryKey: true
        },
    },
    {
        modelName: "favourite",
        sequelize: dbDatabase,
        timestamps: false
    }
);

(async () => {
    await Settings.sync({ alter: true });
})();
