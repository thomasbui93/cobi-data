module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    "rules": {
      "no-console": 1,
      "prettier/prettier": 2
    }
}
