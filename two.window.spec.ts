import {test} from "@playwright/test";

test("two win",async({context})=>{

    const parentPage = await context.newPage();
    await parentPage.goto("https://omayo.blogspot.com/");
    const newwindow = context.waitForEvent("page");
    await parentPage.locator("#selenium143").click();
    const newPage = await newwindow;


    await parentPage.bringToFront();
    await parentPage.waitForTimeout(3000);
    await parentPage.locator("#ta1").fill("laxmikant rachatwar");

    await newPage.bringToFront();
    await newPage.waitForTimeout(3000);
    await newPage.locator("//a[text()='What is Selenium?']").click();


});

