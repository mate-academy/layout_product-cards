'use strict';
const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  // 👇 посилання на твій деплой у GitHub Pages
  url: 'http://localhost:3001/index.html',
  referenceUrl: 'https://yulka-v.github.io/layout_product-cards/',
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
      delay: 1000,
    },
    {
      ...basic,
      label: 'Link with data-qa_hover',
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      selectors: ['[data-qa="card"]'],
      delay: 1000,
    },
  ],
};

module.exports = config;
