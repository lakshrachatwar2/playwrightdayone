import {chromium, test} from "@playwright/test";

test("new test", async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(3000);
    await page.screenshot({

        path:"photos/one.png"
    })
});

test("new test 123", async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(3000);
    await page.screenshot({

        path:"photos/one.png"
    })
});

test("new test 456", async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(3000);
    await page.screenshot({

        path:"photos/one.png"
    })
});