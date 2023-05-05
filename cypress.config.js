module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      dev: {
        url: "https://dev.keela.co/",
        Cred: {
          email: "qatest@getnada.com",
          password: "qatest12345",
        },
      }
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      reportFilename: "[status]-[datetime]-[name]-report",
      overwrite: true,
      html: false,
      json: true,
    },
  },
};
