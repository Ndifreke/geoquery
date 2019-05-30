module.exports = {
    "env": {
        "browser": false,
        "es6": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", "tab"],
        "no_undef": ["warn"],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "semi": ["error", "always"]
    }
};
