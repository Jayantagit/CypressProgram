const dotenv = require("dotenv");
let envfile= process.env.NODE_ENV||'qa';
dotenv.config({ path: `.env.${envfile}`});

const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  projectId: "1m166d",
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  env: {
      adminURL: "https://google.com",
      userName: process.env.USERNAME,
      password: process.env.PASSWORD,
      displayName: process.env.DISPLAYNAME,

    },
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
      on('task', { downloadFile });
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
