import { City } from "../models/cities";

export const getCityList = async () => {
    return (await City.findAll({
        where: {
        },
        attributes: ["id", "city", "country"]
    })).map(
        ({ dataValues: { city, country, id } }) => {
            return { city, country, id, longName: `${city} (${country})` };
        }
    )

}

export const getCity = async (id: number) => {
    return await City.findOne({
        where: { id },
    });
};

export const filterCityList = async (filter: string) => {
    {
        console.log(filter);
        const lowercase = filter.toLowerCase();

        return (await City.findAll({ where: {}, attributes: ["id", "city", "country"] }))
            .filter(({ dataValues: { city, country } }) => `${city} (${country})`.toLowerCase().includes(lowercase)
            ).map(
                ({ dataValues: { city, country, id } }) => {
                    return { city, country, id, longName: `${city} (${country})` };
                }
            )
    }
};


export const getCityData = async () =>
    (await City.findAll());


export const saveCity = async (city:City) => {
    let returnCity = await City.create<City>({ ...city });
};

export const updateCity = async (id: string, city: City) => {
    return await City.update<City>(city, {
        where: {
            id
        },
    });
};

export const deleteCity = async (id: string) => {
    return City.destroy({
        where: {
            id
        }
    })
}