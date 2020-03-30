module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react/recommended"],
  "rules": {
    "react/state-in-constructor": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "react/static-property-placement": "off",
    "react/display-name": 0,
    "max-len": ["error", { "code": 120 }],
    "no-plusplus": 0,
    "react/require-default-props": 0,
  },
};
