// tests/add-to-cart.spec.js
const { test, expect } = require('@playwright/test');

test('Add item to cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  await page.click("a[href='prod.html?idp_=1']"); // Example of selecting a product
  await page.click("a[onclick='addToCart(1)']");

  await page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Product added');
    await dialog.accept();
  });
});
