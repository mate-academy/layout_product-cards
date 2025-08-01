const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1234', // ajuste conforme seu projeto
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'report/html_report',
    overwrite: true,
    html: true,
    json: false,
    inlineAssets: true, // 🔧 importante para abrir direto no navegador via Surge
  },
});
