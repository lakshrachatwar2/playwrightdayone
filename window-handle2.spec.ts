import {test} from "@playwright/test";

test("window handle two", async({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const context = await page.context();
    const newWindow = context.waitForEvent("page");
    await page.locator("#selenium143").click();
    const newPage = await newWindow;
    await newPage.waitForTimeout(2000);
    await newPage.getByRole("link",{name:'What is Selenium?'}).click();
    await newPage.bringToFront();
    await newPage.waitForTimeout(2000);
    await page.waitForTimeout(3000);
    await page.bringToFront();
    await page.locator("#ta1")
    .fill("This is a sample Text on this page. This is a sample Text on this page. This is a sample Text on this page.")
    await page.waitForTimeout(3000);
    const value = await page.locator("#ta1").inputValue();
    console.log(value);
    await page.locator("#selenium143").click();
});



