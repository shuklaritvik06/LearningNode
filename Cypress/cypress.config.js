const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '61sv1c',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
