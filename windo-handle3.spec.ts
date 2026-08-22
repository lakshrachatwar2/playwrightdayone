import {test} from "@playwright/test";

test("window handle three",async ({context})=>{

    const parentPage = await context.newPage();
    await parentPage.goto("https://omayo.blogspot.com/");
    await parentPage.waitForTimeout(2000);
    const newWindow = context.waitForEvent("page");
    await parentPage.locator("#selenium143").click();
    const childPagge = await newWindow;
    //await childPagge.waitForTimeout(2000);
    await childPagge.bringToFront();
    await childPagge.getByRole("link",{name:'What is Selenium?'}).click();
    //await childPagge.waitForTimeout(2000);

    await parentPage.bringToFront();
    await parentPage.locator("#ta1").fill("laxmikant rachatwar");
    await parentPage.waitForTimeout(10000); 
});