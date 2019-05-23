module.exports.serviceMerge = () => {
    const services = {};
    Array.prototype.forEach.call(arguments, (service, index) => {
        services[service.name] = service;
    });
    ;
    return services;
}

module.exports.typeMerge = function () {
    return Array.prototype.reduce.call(arguments, (prev, current, types) => {
        return prev.concat(current);
    })
}