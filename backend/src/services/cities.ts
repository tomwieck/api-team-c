import { City } from "../models/cities";
import * as sequelize from "sequelize";

export const getCityList = async () =>
    (await City.findAll(
        {             attributes: [
            'id', 'city', 'country', 
            [sequelize.fn('concat', sequelize.col('city'), ' (', sequelize.col('country'), ')'), 'longName']
        ]
    }

    ));

export const getCity = async (id: number) => {
    return await City.findOne({
        where: { id },
    });
};

export const filterCityList = async (filter: string) => {
    return (await City.findAll(
        {
            attributes: [
                'id', 'city', 'country', 
                [sequelize.fn('concat', sequelize.col('city'), ' (', sequelize.col('country'), ')'), 'longName']
            ],
            where: {
                    longName: { [sequelize.Op.like]: `%${filter}%` }
            },

        }
    ));
}




export const getCityData = async () =>
    (await City.findAll());


export const saveCity = async (city: City) => {
    let returnCity = await City.create<City>({ ...city });
};

export const updateCity = async (city: City) => {
    return await City.update<City>(city, {
        where: {
            id: city.id,
        },
    });
};

export const deleteCity = async (id: number) => {
    return City.destroy({
        where: {
            id
        }
    })
}