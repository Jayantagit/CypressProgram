const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  projectId: "1m166d",
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 5000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile});
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});
