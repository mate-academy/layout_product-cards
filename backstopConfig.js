module.exports = {
  id: 'product-cards',
  viewports: [
    {
      label: 'desktop',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      label: 'Card with data-qa_card',
      url: 'http://localhost:3000/index.html',
      selectors: ['[data-qa="card"]'],
      delay: 500,
    },
    {
      label: 'Link with data-qa_hover',
      url: 'http://localhost:3000/index.html',
      selectors: ['[data-qa="hover"]'],
      hoverSelector: '[data-qa="hover"]',
      delay: 500,
    },
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
