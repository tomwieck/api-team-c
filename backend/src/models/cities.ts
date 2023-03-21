import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    DataTypes,
} from "sequelize";

import * as fs from "fs";
import { dbDatabase } from "../database/database";

export class City extends Model {
    declare id: string;
    declare city: string;
    declare country: string;
    declare lon: string;
    declare lat: string;
};

City.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lon: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lat: {
            type: DataTypes.STRING,
            allowNull: false,

        }
    },
    {
        modelName: "city",
        tableName: "Cities",
        sequelize: dbDatabase,
        timestamps: false
    }
);

(async () => {
    await City.sync({ alter: true });

    if (await City.count() === 0) {

        console.log("City model empty, loading base city data... ");

        const baseCityData = fs.readFileSync(process.env.BASE_CITY_DATA ?? "data/basecities.tsv", { encoding: 'utf8', flag: "r" })
            .split('\r\n')
            .map((row) => {
                const item = row.split('\t');
                return { city: item[0], lat: item[1], lon: item[2], country: item[3], id: item[4] };
            });

        console.log(`... data for ${baseCityData.length} cities loaded. Inserting into cities table...`);

        await Promise.all(baseCityData.map((city) => City.create<City>(city)));

        console.log("... city table initialised");
    }
})();
