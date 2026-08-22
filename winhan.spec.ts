import {test} from "@playwright/test";

test("wh",async({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const context = await page.context();
    const newWindow = context.waitForEvent("page");
    await page.locator("#selenium143").click();
    const newPage = await newWindow;
    await newPage.waitForTimeout(2000);
    await newPage.getByRole("link",{name:'What is Selenium?'}).click();;
    await newPage.waitForTimeout(3000);
});