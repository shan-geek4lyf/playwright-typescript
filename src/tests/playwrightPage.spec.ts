//import { test, expect } from '@playwright/test';
import { test } from '../fixtures/fixture';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

//test with pageobject model and fixtures

test ('Verify HomePage',async({homePage})=>{
  await homePage.gotoHomePage();
});

test ('Verify installation page',async({homePage,installationPage})=>{
  await homePage.gotoHomePage();
  await homePage.clickGetStarted();
  await installationPage.verifyLinks();
});


