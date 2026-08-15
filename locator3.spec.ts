import {test} from "@playwright/test";

test("nth first last ",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.locator("#LinkList1 a").last().click();
    await page.waitForTimeout(2000);
    
});

test("filter test",async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await page.waitForTimeout(5000);
    await page.locator("//div[@class='inventory_item']")
    .filter({hasText:"Sauce Labs Backpack"})
    .getByRole("button",{name:"Add to Cart"}).click();
    await page.waitForTimeout(2000);

});

test("frame test",async ({page})=>{

    await page.goto("https://letcode.in/frame");
    await page.waitForTimeout(2000);
    const fr = await page.frameLocator("#firstFr");
    await fr.getByPlaceholder("Enter name").fill("Laxmikant");
    await page.waitForTimeout(2000);
});

test("combine locator test", async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByText("My Account").first().click();
    await page.getByText("Login").first().click();
    await page.waitForTimeout(2000);
    await page.locator("(//form)[2]").locator("#input-email").fill("lakshrahctawar123@gmail.com");
    await page.locator("(//form)[2]").locator("#input-password").fill("43535252");
    await page.waitForTimeout(2000);
})