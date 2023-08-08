const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    adminUserName: "fifka_petr",
    adminPassword: "Tredgate2023",
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});

