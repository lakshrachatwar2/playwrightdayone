import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  /* await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright jobs'); */
 /*  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%2Bjobs%26sca_esv%3D94dc93bb939e4e4e%26source%3Dhp%26ei%3DQ9R6au6JBaGihvcPzN668QI%26iflsig%3DABILxe8AAAAAanriU6sOvyrlT0nEk2kJL1co0AHYPxqJ%26ved%3D0ahUKEwiut_LKi5iWAxUhkeEIHUyvLi4Q4dUDCB4%26uact%3D5%26oq%3Dplaywright%2Bjobs%26gs_lp%3DEgdnd3Mtd2l6Ig9wbGF5d3JpZ2h0IGpvYnMyBRAAGIAEMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKdiUMssWPZWcAF4AJABAJgBY6ABzAqqAQIxNbgBA8gBAPgBAZgCEKACiguoAgrCAgoQABgDGI8BGOoCwgIKEC4YAxiPARjqAsICDhAAGIAEGIoFGLEDGIMBwgIIEAAYgAQYsQPCAggQLhiABBixA8ICCxAuGIAEGLEDGOUEwgILEAAYgAQYigUYkgPCAggQABiABBjJA5gDC_EFBvNIYPlmGf2SBwQxNS4xoAedU7IHBDE0LjG4B_4KwgcIMC4xMi4zLjHIByqACAE%26sclient%3Dgws-wiz%26sei%3DVNR6asPYLuPSp84P3eCD4Q4&q=EhAkAUkAHEVQbDCxCCeB3xy2GNWo69MGIjClE0PZtQX2pYBHWVfk8cmQKr1muSptyAdxpCygLwzHQZXDprscv5n6nb5ne8toos4yAVJaAUM');
  await page.locator('iframe[name="a-kv1kjixnxzkb"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click(); */

  await page.goto('https://omayo.blogspot.com/');
  await page.locator('#radio1').check();
  await page.locator('#HTML2').getByRole('textbox').click();
  await page.locator('#HTML2').getByRole('textbox').fill('');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open a popup window' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Blogger' }).click();
  const page2 = await page2Promise;

});