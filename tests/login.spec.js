// tests/login.spec.js
const { test, expect } = require('@playwright/test');

test('Login to DemoBlaze', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  
  await page.click('#login2');
  await page.fill('#loginusername', 'MiguelTeste');
  await page.fill('#loginpassword', 'testando123');
  await page.click("button[onclick='logIn()']");
  
  // Aguardar o texto de boas-vindas estar visível
  await page.waitForSelector('#nameofuser', { timeout: 10000 });
  
  // Verificar se o seletor realmente contém texto e exibir o valor para debug
  const welcomeText = await page.locator('#nameofuser').textContent();
  console.log(`Texto retornado pelo seletor #nameofuser: ${welcomeText}`);
  
  // Verificar se o texto de boas-vindas é exibido corretamente
  await expect(page.locator('#nameofuser')).toContainText('Welcome MiguelTeste', { timeout: 10000 });
});
