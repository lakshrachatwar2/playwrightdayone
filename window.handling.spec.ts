import {test} from "@playwright/test";

test("window action",async({context})=>{

    const parentPage = await context.newPage();
    await parentPage.goto("https://omayo.blogspot.com/");
    const newWindow = context.waitForEvent("page");
    await parentPage.locator("#selenium143").click();
    const newPage = await newWindow;
    await newPage.getByRole("link",{name:'What is Selenium?'}).click();
    await newPage.waitForTimeout(3000);
    await parentPage.bringToFront();
    await parentPage.waitForTimeout(2000);
    await parentPage.locator("#ta1").fill("adadasdasdadasdasdasdasdasdasdasdasdasdasd");
});