# Test-automation-with-cypress

It is necessary
npm install -D cypress-cucumber-preprocessor To start the tests, run one of the following commands in the VS terminal Code: To run the tests via terminal: npx cypress run To run the tests via browser: npx cypress run --browser chrome - -no-exit To run tests via script saved in package.json: npm run test: chrome

Cypress configuration: find the excerpt below in the plugins file:

cypress / plugins / index.js

const cucumber = require ('cypress-cucumber-preprocessor'). pattern

module.exports = (on, config) => {on ('file: preprocessor', cucumber ())}
