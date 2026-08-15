import {test} from "@playwright/test";
import strict from "node:assert/strict";

test("locators demo", async ({page})=>{

    await page.goto("https://selenium143.blogspot.com/");
    await page.waitForTimeout(2000);
    page
    await page.getByAltText("Selenium143 ").click();
});

test("locators test two", async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/");
    await page.waitForTimeout(2000);
    await page.getByAltText("MacBookAir");
    console.log("cllicked on element");
});

test("locators three test", async ({page})=>{

    await page.goto("https://www.filmyzilla54.com/");
    await page.waitForTimeout(5000);
    await page.getByAltText("facebook").click();
    await page.waitForTimeout(5000);
    console.log("filmizilla");

});


test("exact locator test", async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/");
    //await page.waitForTimeout(000);
    await page.getByAltText("MacBook",{exact:true}).click();

});

test("placeholder test", async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.waitForTimeout(2000);
    await page.getByPlaceholder("First Name").fill("Laxmikant QA");
    await page.waitForTimeout(4000);
});

test("get by text",async ({page})=>{

    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);
    await page.locator("//textarea[@id='APjFqb']").fill("playwright");
    await page.waitForTimeout(2000);
    await page.getByText("Ai Mode").click();
});

test("get by label",async ({page})=>{

    await page.goto("https://www.amazon.com/");
    await page.waitForTimeout(2000);
    await page.getByLabel("Search Amazon").fill("123456");
    await page.waitForTimeout(6000);
});

test("get by role",async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/");
    await page.waitForTimeout(2000);
    await page.getByRole("textbox",{name:"search"}).fill("laksh rachatwar 123");
    await page.waitForTimeout(5000);
})

test("get by rolee",async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.waitForTimeout(2000);
    await page.getByRole("button",{name:"Continue"}).click();
    await page.waitForTimeout(5000);
})

test("get by roleee",async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.waitForTimeout(2000);
    await page.getByRole("link",{name:"My Account"}).first().click();
    await page.getByRole("link",{name:"Login"}).first().click();
    await page.getByRole("textbox",{name:"E-Mail Address"}).fill("lakshrachatwaraaa@gmail.com");
    await page.getByRole("textbox",{name:"Password"}).fill("laxmikant@123456");
    await page.getByRole("button",{name:"Login"}).click();
    await page.waitForTimeout(5000);
})

test("get by title",async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.waitForTimeout(2000);
    page.getByTitle("Shopping Cart").click();
    await page.waitForTimeout(5000);
})