// tests/checkout.spec.js
const { test, expect } = require('@playwright/test');

test('Complete checkout process', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  
  await page.click("a[href='prod.html?idp_=1']");
  await page.click("a[onclick='addToCart(1)']");
  
  await page.goto('https://www.demoblaze.com/cart.html');
  await page.click("button[data-target='#orderModal']");

  await page.fill('#name', 'Test User');
  await page.fill('#country', 'Test Country');
  await page.fill('#city', 'Test City');
  await page.fill('#card', '123456789');
  await page.fill('#month', '10');
  await page.fill('#year', '2024');
  await page.click("button[onclick='purchaseOrder()']");

  await expect(page.locator('.sweet-alert')).toContainText('Thank you for your purchase!');
});
