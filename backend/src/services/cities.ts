
import { City } from "../models/cities";

export const getCityList = async () => City.findAll();

export const getCity = async (id: number) => {
	return await City.findOne({
		where: { id },
	});
};

export const saveCity = async (city: City) => {
	let returnCity =  await City.create<City>({... city});
};

// User Story 4 - Update City By Id Solution
export const updateCity = async (id: number, city: City) => {
	return await City.update<City>(city, {
		where: {
			id,
		},
	});
};

export const deleteCity = async( id: number) => {
	return City.destroy( { 
		where: {
			id
		}
	})
}