const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://browserbench.org/Speedometer2.0/resources/todomvc/vanilla-examples/vanillajs/'
  },
});