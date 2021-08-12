module.exports = 
`type Country {
  iso:  String,
	iso3:  String
	iso_numeric:  String,
	fips:  String,
	name:  String,
	capital:  String,
	area:  String,
	population:  String,
	continent:  String,
	tld:  String,
	currencyCode:  String,
	currencyName:  String,
	phone:  String,
	postalCodeFormat:  String,
	postalCodeRegex:  String,
	languages:  String,
  states: [State!]!
},

`;
