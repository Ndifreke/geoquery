
/**
 * Merge/combine one or more graphql services into a single source of services. 
 * @returns object a merger of services passed as argument to servicesMerge
 */
function serviceMerge() {
	const services = {};
	Array.prototype.forEach.call(arguments, (service) => {
		services[service.name] = service;
	});
	return services;
}

/**
 * Merge/Combine one or more graphql schema/type into a single source of schema.
 * It behaves exactly as you would call a chain of concat() on string variable. 
 * @returns string a merger of passed argument
 */
function typeSchemaMerger () {
	return Array.prototype.reduce.call(arguments, (prevSchema, currentSchema) => {
		return prevSchema.concat(currentSchema);
	});
}

function isDigit(arg){
	return !isNaN(arg);
}

function isAlphabet(arg){
	return /^[a-z]+$/gi.test(arg);
}
export default { isAlphabet, isDigit, typeSchemaMerger, serviceMerge};
