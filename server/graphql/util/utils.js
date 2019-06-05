import {exec} from 'child_process';
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

const platforms = {
	MAC:'darwin',
	WINDOW: 'win32',
	LINUX: 'linux',
};

/**
 * get a suitable string that can be used from command line to start google chrome
 * @param {platforms} platform host operating system
 * @returns {string} string to start chrome browser
 */
const getStartChromeCommand = (platform)=>{
	let command = null;
	switch(platform){
	case platforms.WINDOW:
		command = `start chrome`;
		break;
	case platforms.MAC:
		command = `open -a "Google Chrome"`;
		break;
	case platforms.LINUX: 
		command =  `google-chrome`;
		break;
	}
	return command;
};

/**
 * start Google chrome using the provided port
 * @param {Number} port 
 */
const startBrowser = (port) => {
	const command = `${getStartChromeCommand(process.platform)} http://localhost:${port}`;
	exec(command, (err, stdout, stderr) => {
		if(err)console.log(err,stderr, stdout);
	});
};

export default { 
	isAlphabet, 
	isDigit, 
	typeSchemaMerger, 
	serviceMerge, 
	startBrowser, 
	getStartChromeCommand,
	platforms
};
