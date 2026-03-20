module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);
  
  // Configurar Puppeteer para ignorar erros de certificado e aumentar timeout
  await page.setBypassCSP(true);
};
