module.exports = {
	moduleNameMapper: {
		'^@server(.*)$': '<rootDir>/server$1',
		'^@graphql(.*)$': '<rootDir>/server/graphql$1',
		'^@service(.*)$': '<rootDir>/server/graphql/service$1',
		'^@type(.*)$': '<rootDir>/server/graphql/type$1',
		'^@util(.*)$': '<rootDir>/server/graphql/util/$1',
		'^@query(.*)$': '<rootDir>/server/graphql/query$1',
	}
};
