import City from "../city/City";
import CityService from "../city/cityService";
import CountryService from "../country/CountryService";

export type StateType = {
    countryId: string,
    adminCode1: string,
    countryName: string,
    fclName: string,
    countryCode: string,
    lng: string,
    fcodeName: string,
    toponymName: string,
    fcl: string,
    numberOfChildren: number,
    name: string,
    fcode: string,
    geonameId: number,
    lat: string,
    adminName1: string,
    population: number
   
}

export interface StateInterface {
    countryId: () => string,
    adminCode1: () => string,
    countryName: () => string,
    fclName: () => string,
    countryCode: () => string,
    longitude: () => string,
    fcodeName: () => string,
    toponymName: () => string,
    fcl: () => string,
    numberOfChildren: () => number,
    name: () => string,
    fcode: () => string,
    geonameId: () => number,
    latitude: () => string,
    adminName1: () => string,
    population: () => number
    country:() => CountryService
    cities:() => City[]
}

class State implements StateInterface {
    private state: StateType

    constructor(state: StateType) {
        this.state = state
    }
    countryId() {
        return this.state.countryId
    }
    adminCode1() {
        return this.state.adminCode1
    }
    countryName() {
        return this.state.countryName
    }
    fclName() {
        return this.state.fclName
    }
    countryCode() {
        return this.state.countryCode
    }
    longitude() {
        return this.state.lng
    }
    fcodeName() {
        return this.state.fcodeName
    }
    toponymName() {
        return this.state.toponymName
    }
    fcl() {
        return this.state.fcl
    }
    numberOfChildren() {
        return this.state.numberOfChildren
    }
    fcode() {
        return this.state.fcode
    }
    geonameId() {
        return this.state.geonameId
    }
    latitude() {
        return this.state.lat
    }
    adminName1() {
        return this.state.adminName1
    }
    population() {
        return this.state.population
    }

    name() {
        return this.state.name
    }

    country() {
        return new CountryService({ id: this.countryName(), mode: 'name' })
    }

    cities(){
       
        return CityService.getCityService(this).getCities()
    }

    static getStatesFromCountryService(country: CountryService) {
        return country.states()
    }

}

export default State;
