import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
} from "sequelize";

import { dbDatabase } from "../database/database";

export class Setting extends Model
// <
//     InferAttributes<Favourite>, InferCreationAttributes<Favourite>
// >
{
    declare settings: string;
} [];

Setting.init(
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
    await Setting.sync({ alter: true });
})();
