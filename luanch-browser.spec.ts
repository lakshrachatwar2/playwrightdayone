import {chromium, firefox, test, webkit} from "@playwright/test";

test("launch chrome browser", async ()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
    await page.waitForTimeout(3000);
});

test("launch edge browser",async ()=>{

    const browser = await chromium.launch({channel : 'msedge'});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.waitForTimeout(3000);
})

test("launch firefox browser",async ()=>{

    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.waitForTimeout(10000);
})

test("launch safari browser",async ()=>{

    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://arunmotoori.github.io/m8.html");
    //await page.waitForTimeout(10000);
    await page.waitForTimeout(5000);
    await page.locator("#submitBtn").click({force:true});
    //await page.waitForTimeout(10000);
})


