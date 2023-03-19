
import { cities } from "../database/database";

export const servGetCityList = async () => {
    const data = cities.map(({ id, city, country, lon: lat, lat: lon }) => {
        return { id, city, country, longName: `${city} (${country})` };
    });
    return data;
};