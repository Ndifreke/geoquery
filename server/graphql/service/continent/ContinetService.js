class Continent {
	static continents() {
		return ['Africa', 'Europe', 'Asia', 'North_America', 'South_America', 'Australia', 'Antarctica'];
	}

	static matchContinent(input) {
		let result = null;
		if (typeof input === 'string' && input.length >= 2) {
			Continent.continents().some((continent) => {
				if (continent.length >= input.length && new RegExp(`${input}`, 'gi').test(continent.substring(0, input.length))) {
					result = continent;
					return true;
				}
			});
		}
		return result;
	}

	static continent(arg) {
		return Continent.matchContinent(arg);
	}
}

// module.exports = {
// 	continent: Continent.continent,
// 	continents: Continent.continents
// };

export default {
	continent: Continent.continent,
	continents: Continent.continents,
};
