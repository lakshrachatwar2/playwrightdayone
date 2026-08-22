import {test} from "@playwright/test";

test("two windows",async({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    const context = await page.context();
    const newwindow = context.waitForEvent("page");
    await page.locator("#selenium143").click();
    await page.waitForTimeout(5000);
    const newpage = await newwindow;
    await newpage.waitForTimeout(3000);
    await newpage.locator("//a[text()='What is Selenium?']").click();
    await newpage.bringToFront();
    await page.bringToFront();
    await newpage.waitForTimeout(3000);
})