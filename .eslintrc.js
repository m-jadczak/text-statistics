module.exports = {
    "globals": {
      expect : true,
      should : true
    },
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react-hooks/rules-of-hooks": "error", // Sprawdza stosowanie zasad hooków
        "react-hooks/exhaustive-deps": "warn" // Sprawdza zależności efektów
    }
};
