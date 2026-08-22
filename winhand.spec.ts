import {test} from "@playwright/test";

test("window handle test",async({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const context = await page.context();
    const newWind = context.waitForEvent("page");
    await page.locator("#selenium143").click();
    const newPage = await newWind;
    await newPage.waitForTimeout(5000);
    await newPage.getByRole("link",{name:'What is Selenium?'}).click();
    await newPage.waitForTimeout(4000);
});