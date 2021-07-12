import CountryService, { CountryType } from "../country/CountryService"
import State from "../state/State"
import StateService from "../state/StateService"

export type CityType = {
    geonameid: string,
    name: string,
    asciiname: string,
    alternatenames: string[],
    latitude: string,
    longitude: string,
    feature_class: string,
    feature_code: string,
    country_code: string,
    cc2: string,
    admin1_code: string,
    admin2_code: string,
    admin3_code: string,
    admin4_code: string,
    population: string,
    elevation: string,
    dem: string,
    timezone: string,
    modification_date: string
}

interface CityInterface {
    country: () => CountryService
    state: () => State
    geonameId: () => string,
    name: () => string,
    asciiName: () => string,
    alternateNames: () => string[],
    latitude: () => string,
    longitude: () => string,
    featureClass: () => string,
    featureCode: () => string,
    countryCode: () => string,
    cc2: () => string,
    admin1Code: () => string,
    admin2Code: () => string,
    admin3Code: () => string,
    admin4Code: () => string,
    population: () => string,
    elevation: () => string,
    dem: () => string,
    timezone: () => string,
}
export default class City implements CityInterface {
    private city: CityType

    constructor(city: CityType) {
        this.city = city
    }
    state() {
        const thisCity = this
        return this.country().states().find(s => s.cities().some(c => c.name() === thisCity.name())) as State
    }
    geonameId() {
        return this.city.geonameid
    }
    name() {
        return this.city.name
    }
    asciiName() {
        return this.city.asciiname
    }
    alternateNames() {
        return this.city.alternatenames
    }
    latitude() {
        return this.city.latitude
    }
    longitude() {
        return this.city.longitude
    }
    featureClass() {
        return this.city.feature_class
    }
    featureCode() {
        return this.city.feature_code
    }
    countryCode() {
        return this.city.country_code
    }
    cc2() {
        return this.city.cc2
    }
    admin1Code() {
        return this.city.admin1_code
    }
    admin2Code() {
        return this.city.admin2_code
    }
    admin3Code() {
        return this.city.admin3_code
    }
    admin4Code() {
        return this.city.admin4_code
    }
    population() {
        return this.city.population
    }
    elevation() {
        return this.city.elevation
    }
    dem() {
        return this.city.dem
    }
    timezone() {
        return this.city.timezone
    }

    country() {
        return new CountryService({ id: this.city.country_code, mode: 'iso' })
    }

}
