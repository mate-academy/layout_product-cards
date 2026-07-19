'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/product-cards/',
  // Разрешаем погрешность в 0.1%, это уберет ошибки из-за сглаживания шрифтов
  misMatchThreshold: 0.1,
  // Даем время на отрисовку
  delay: 1000,
  // Игнорируем антиалиасинг (разное сглаживание пикселей)
  resembleOutputOptions: {
    ignoreAntialiasing: true,
  },
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
