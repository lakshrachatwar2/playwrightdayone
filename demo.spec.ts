import {chromium, test} from "@playwright/test";

 test("getting started with playwright", async ()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://tutorialsninja.com/demo/");
    await page.waitForTimeout(2000);
    await page.screenshot({
    path: "screenshots/homepage.png"
    });
    page.locator("//span[text()='My Account']").click();
    await page.waitForTimeout(2000);
    page.locator("//a[text()='Login']").click();
    await page.waitForTimeout(2000);
    page.locator("#input-email").fill("lakshrachatwaraaa@gmail.com");
    await page.waitForTimeout(2000);
    page.locator("#input-password").fill("laxmikant@123456");
    await page.waitForTimeout(2000);
    page.locator("//input[@type='submit']");
    await page.waitForTimeout(2000);
    

}); 

test("omayo blog spot applocation",async ()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://omayo.blogspot.com/");
     page.screenshot({

        path:"screenShot/omayo.png"
    }) 
    await page.waitForTimeout(3000);

}) 

