module.exports = {
    "extends": "airbnb",
    "parserOptions": {
        "ecmaVersion": 7,
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "arrow-body-style": ["error", "always"],
      "quotes": "off",
      "react/prefer-stateless-function": [0, { "ignorePureComponents": false }]
    },
};
