const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1024, height: 768 } });
  await page.goto('http://localhost:3001');

  const card = await page.locator('[data-qa="card"]').evaluate((el) => {
    const s = getComputedStyle(el);
    return {
      width: s.width,
      padding: s.padding,
      border: s.border,
      borderRadius: s.borderRadius,
      bg: s.backgroundColor,
      boxSizing: s.boxSizing,
    };
  });

  const img = await page.locator('.card__image').evaluate((el) => {
    const s = getComputedStyle(el);
    return {
      width: s.width,
      height: s.height,
      marginTop: s.marginTop,
      marginBottom: s.marginBottom,
      bg: s.backgroundImage,
      bgSize: s.backgroundSize,
      borderRadius: s.borderRadius,
    };
  });

  const btn = await page.locator('.card__buy').evaluate((el) => {
    const s = getComputedStyle(el);
    return {
      width: s.width,
      height: s.height,
      border: s.border,
      borderColor: s.borderColor,
      borderWidth: s.borderWidth,
      bg: s.backgroundColor,
      color: s.color,
      borderRadius: s.borderRadius,
      marginTop: s.marginTop,
    };
  });

  console.log(JSON.stringify({ card, img, btn }, null, 2));
  await browser.close();
})();
