import {test} from "@playwright/test";

test("wait mechanism",async({page})=>{

    page.setDefaultTimeout(60000);
    await page.goto("https://omayo.blogspot.com/");
    await page.locator("//button[text()='Dropdown']").click();
    await page.locator("//a[text()='Flipkart123']").click();
});

test("perticular element waiting mechanism", async({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.locator("//button[text()='Dropdown']").click();
    await page.locator("//a[text()='Flipkart']").click({timeout:1000});
})

test("wait till load",async({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.locator("//a[text()='jqueryui']").click();
    await page.waitForLoadState();
});