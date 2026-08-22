import {test} from "@playwright/test";

test("wait mechanism",async({page})=>{

    page.setDefaultTimeout(60000);
    await page.goto("https://omayo.blogspot.com/");
    await page.locator("//button[text()='Dropdown']").click();
    await page.locator("//a[text()='Flipkart123']").click();
});