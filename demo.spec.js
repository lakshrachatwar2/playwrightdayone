import { chromium, test } from "@playwright/test";

test("getting started with playwright", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const newpage = await context.newPage();
    const application = await newpage.goto("https://tutorialsninja.com/demo/");
});

test("getting started with playwright 2", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const newpage = await context.newPage();
    const application = await newpage.goto("https://tutorialsninja.com/demo/");
});

test("getting started with playwright 3", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const newpage = await context.newPage();
    const application = await newpage.goto("https://tutorialsninja.com/demo/");
});

test("getting started with playwright 4", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const newpage = await context.newPage();
    const application = await newpage.goto("https://tutorialsninja.com/demo/");
});

