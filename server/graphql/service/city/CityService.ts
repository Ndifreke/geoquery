import State, { StateType } from "../state/State";
import fs from 'fs';
import { DATA_SOURCE_PATH, DATA_SOURCE_PATH_FOLDERS_NAMES } from "../../../constant";
import CountryService, { CountryType } from "../country/CountryService";
import City, { CityType } from "./City";
const path = require('path');

type CityServiceDataType = {
    region_data: StateType
    country_data: CountryType
    cities: CityType[]
}

export default class CityService {
    private static service: CityService;
    private static country
    private static cityData: CityServiceDataType

    private constructor(state: State) {
        //  CityService.cityData = state
        CityService.cityData = CityService.readStateCities(state)
    }

    static getCityService(state: State) {
        //Could return one city if loaded into
        if (CityService.service) {
            return CityService.service
        }
        return new CityService(state)
    }

    getCities() {
        return CityService.cityData.cities.map((city) => new City(city))
    }

  
    /**
     * Read all the city in a State directory
     * @param state the state to read cities from
     * @returns 
     */
    private static readStateCities(state: State): CityServiceDataType {
        try {
            const countryFileWithCities = fs.readFileSync(path.join(DATA_SOURCE_PATH, DATA_SOURCE_PATH_FOLDERS_NAMES.CountryStateCity, state.countryName(), `${state.name()}.json`));
            // const cities = countryFileWithCities.map((cityName) => {
            //     const city = fs.readFileSync(path.join(DATA_SOURCE_PATH, DATA_SOURCE_PATH_FOLDERS_NAMES.CountryStateCity, state.countryName(), state.name(), `${cityName}.json`));
            //     const json = JSON.parse(city.toString())
            //     return json
            // })
            return JSON.parse(countryFileWithCities.toString())
        } catch (error: any) {

            //@ts-ignore
            return { cities: [], country_data: {}, region_data: {} }
        }
    }
}


