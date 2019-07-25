'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl:
    'https://mate-academy.github.io/layout_solutions/product-cards/',
};

const config = {
  ...backstop,
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
      label: 'test-card-default',
      selectors: ['[data-qa="card"]'],
    },
    {
      ...basic,
      label: 'test-card-hover',
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      selectors: ['[data-qa="card"]'],
    },
  ],
};

module.exports = config;
