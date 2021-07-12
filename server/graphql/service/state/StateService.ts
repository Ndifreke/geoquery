import CountryService, { CountryType } from "../country/CountryService";
import { DATA_SOURCE_PATH, DATA_SOURCE_PATH_FOLDERS_NAMES } from "../../../constant";
import fs from 'fs';
import State, { StateType } from "./State";
const path = require('path');

type StateServiceDataType = {
    country_data: CountryType
    regions: StateType[]
}

export default class StateService {
    private static service: StateService
    private static country
    private static stateData: StateServiceDataType
    private constructor(coutry: CountryService) {
        StateService.country = coutry
        StateService.stateData = StateService.readCountryStateFile(coutry.name())
    }

    static getService(country: CountryService) {
        if (StateService.service) {
            return StateService.service
        }
        return new StateService(country)
    }

    private static readCountryStateFile(countryName: string) {
        console.log(countryName)
        const countryStateFile = fs.readFileSync(path.join(DATA_SOURCE_PATH, DATA_SOURCE_PATH_FOLDERS_NAMES.CountryState, `${countryName}.json`));
        try {
            const json = JSON.parse(countryStateFile.toString())
            return json
        } catch (error: any) {
            return {regions:[],country_data:{}}
        }
    }

    getStates() {
        return StateService.stateData.regions.map(region => new State(region))
    }
}


