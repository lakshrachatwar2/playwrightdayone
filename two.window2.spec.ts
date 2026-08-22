import {test} from "@playwright/test";

test("pop up handling",async({context})=>{

    const parentPage = await context.newPage();
    await parentPage.goto("https://omayo.blogspot.com/");
    const newwindow = context.waitForEvent("page");
    await parentPage.locator("//a[text()='Open a popup window']").click();
    const newpage = await newwindow;
    const para = newpage.locator("//h3[text()='New Window']");
    const text = await para.innerText();
    console.log(text);
});