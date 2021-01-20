'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/product-blocks/',
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
      label: 'block with data-qa_block',
      selectors: ['[data-qa="block"]'],
    },
    {
      ...basic,
      label: 'Link with data-qa_hover',
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      selectors: ['[data-qa="block"]'],
    },
  ],
};

module.exports = config;
