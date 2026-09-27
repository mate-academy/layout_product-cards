module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await page.evaluate(() => document.fonts.ready);
  await require('./clickAndHoverHelper')(page, scenario);
};
