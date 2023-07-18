import { defineConfig } from 'cypress'

module.exports = defineConfig({
  video: false,
  supportFolder: 'cypress/support',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    fixturesFolder: 'cypress/fixtures',
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
