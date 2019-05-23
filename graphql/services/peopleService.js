const {serviceMerge} = require("../schema/graphQLUtil");

const getPeople = () => {
    return JSON.stringify(
            {
                name: "Ndifreke",
                age: 24,
                country: "Nigeria",
                language: ["English", "Ibibio"]

            });
}

const isMale = ({name}) => {
    return (Number(name) % 2) === 0;
}


const country = () => {
    return { stateCount: 5}
}

const servicesMerge = (serviceList) => {
    const services = {};

    serviceList.forEach((service, index) => {
        services[service.name] = service;
    });
    ;
    return services;
}


module.exports = servicesMerge([getPeople, isMale, country ]);




