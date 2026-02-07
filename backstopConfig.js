const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const BASE_URL = 'https://johannpdaniel.github.io/layout_product-cards/';

const basic = {
  ...basicScenario,
  url: BASE_URL,
  referenceUrl: BASE_URL,
  testUrl: BASE_URL,
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Card with data-qa_card',
      selectors: ['[data-qa="card"]'],
    },
    {
      ...basic,
      label: 'Link with data-qa_hover',
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      selectors: ['[data-qa="card"]'],
    },
  ],
};

module.exports = config;
