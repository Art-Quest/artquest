// module.exports = {
//   rules: {
//     "@typescript-eslint/no-unused-vars": ["off"],
//   },
// };

module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ECMAScript standard
    sourceType: "module", // Allow the use of imports
  },
  env: {
    es6: true, // Enable ES6 global variables
    browser: true, // For client-side environments
    node: true, // If you're using Node.js
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["off"],
    "no-unused-vars": "off",
    "no-undef": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
