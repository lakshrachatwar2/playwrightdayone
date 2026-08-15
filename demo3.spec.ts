import {chromium, test} from "@playwright/test";

test("enter omayo blog spot application", async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(3000);
})

test("send text into text field", async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(5000);
    page.locator("//textarea[@id='ta1']").fill("The above Mr Option will be enabled in 10 seconds after clicking on below Check this button")
    await page.waitForTimeout(3000);
})

