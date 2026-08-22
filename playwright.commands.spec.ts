import {chromium, test} from "@playwright/test";

test("enter text fill",async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.locator("//input[@name='search']").fill("laxmiikant racha");
    await page.waitForTimeout(5000);
});

test("enter text pressSequentially",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    page.locator("#textbox1").clear();
    await page.locator("#textbox1").pressSequentially("laxmiikant racha",{delay:500});
    await page.waitForTimeout(5000);
});

test("check test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.locator("#checkbox2").check();
    await page.waitForTimeout(5000);
});

test("uncheck test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.locator("#checkbox1").uncheck();
    await page.waitForTimeout(5000);
});

test("isChecked test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const status = await page.locator("#checkbox1").isChecked();
    console.log("button checked status is: "+status);
    await page.waitForTimeout(5000);
});

test("isChecked test two",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const status = await page.locator("//input[@value='Bike']").isChecked();
    console.log("button checked status is: "+status);
    await page.waitForTimeout(5000);
});

test("isChecked test loop",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const checkbox = page.locator("//input[@value='Book']");
    const checkbox2 = page.locator("//input[@value='Laptop']");

    if (!(await checkbox.isChecked())) {
    await checkbox.check();
} else if (!(await checkbox2.isChecked())) {
    await checkbox2.check();
} else {
    await checkbox.uncheck();
    await checkbox2.uncheck();
}

    await page.waitForTimeout(5000);
});

test("innerText test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const vari = page.locator("//h2[text()='Select a vehicle']");
    const text = await vari.innerText();
    console.log("inner text is: "+text);
    await page.waitForTimeout(5000);
});

test("title test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    
    const title = await page.title();
    console.log("page title text is: "+title);
    await page.waitForTimeout(5000);
});

test("url test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    
    const url = await page.url();
    console.log("page url is: "+url);
    await page.waitForTimeout(5000);
});

test("close test",async ()=>{

    const browser = await chromium.launch();
    const context  = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://omayo.blogspot.com/");
    await page.close();
    //await page.waitForTimeout(10000);
    //await page.close();
});

test("getAttribute test",async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.waitForTimeout(2000);
    
    const attributevalue = await page.locator("//input[@type='submit']").getAttribute('class');
    console.log("attribute value is: "+attributevalue);
    await page.waitForTimeout(5000);
});

test("isdisplay test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    
    const image = page.locator("//input[@value='Search']");
    const status1 = await image.isDisabled();
    console.log("image display status is: "+status1);
    await page.waitForTimeout(5000);
});

test("closeall test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.getByRole("link",{name:'Open a popup window'}).click();
    await page.waitForTimeout(2000);
    await page.close();
    const cont = await page.context();
    await cont.close();
});

test("element isdisplay test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const abc = await page.locator("#alert1");
    const sts = await abc.isVisible();
    console.log("element display status: "+sts);
});

test("element isenabled test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const abc = await page.locator("#but1");
    const sts = await abc.isEnabled();
    console.log("element display status: "+sts);
});

test("element isselected test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const abc = await page.locator("#checkbox1");
    const sts = await abc.isChecked();
    console.log("element display status: "+sts);
});

test("element ishidden test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const statusA = await page.locator("#prompt").isHidden();
    console.log("hidden button status is: "+statusA);
    await page.waitForTimeout(2000);
});

test("element ishidden test two",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const statusA = await page.getByRole("button",{name:'Button2'}).isDisabled();
    console.log("isdisabled button status is: "+statusA);
    await page.waitForTimeout(2000);
});

test("element iseditable test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    const statusA = await page.locator("#rotb").isEditable();
    console.log("iseditsble button status is: "+statusA);
    await page.waitForTimeout(2000);
});

test("navigation test",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.reload();
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(2000);
});

test("content test",async({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(1000);
    const pagesource = await page.content();
    console.log(pagesource);
});

test("get tag name test",async({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(1000);
    const loc = await page.locator("#ta1");
    const tagname = await loc.evaluate(Element => Element.tagName);
    console.log("tag name is: "+tagname);
});

test("get css attributes test",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.waitForTimeout(1000);
    const cartbutton = await page.locator("//button[@class='btn btn-inverse btn-block btn-lg dropdown-toggle']");
    const css = await cartbutton.evaluate(Element => getComputedStyle(Element).getPropertyValue("color"));
    console.log("font size is: "+css);
});

test("get height weight x y test",async({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(1000);
    const search = await page.locator("#ta1");
    const box = await search.boundingBox();
    console.log(box?.height);
    console.log(box?.width);
    console.log(box?.x);
    console.log(box?.y);
});

test("operating multiple locators test",async({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(1000);
    const options = await page.locator("//select[@id='multiselect1']/option");
    
    for(let i=0;i<await options.count();i++){

        const text = await options.nth(i).innerText();
        console.log(text) 

    }
});

test("operating multiple locators test two",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/");
    await page.waitForTimeout(1000);
    const links = page.getByRole("link");
    for(let i=0;i<await links.count();i++){

        const text = await links.nth(i);
        await page.waitForTimeout(2000);
        await text.click();
        await page.waitForLoadState();
        await page.waitForTimeout(3000);
        await page.goBack();
    }
});

test("operating multiple locators test three",async({page})=>{

    await page.goto("https://arunmotoori.github.io/m6.html");
    await page.waitForTimeout(2000);
    const links = await page.getByRole("link");

    for(let i=0;i<await links.count();i++){

        await links.nth(i).click();
        await page.waitForTimeout(2000);
        await page.goBack();
    }
    
});

test("operating multiple locators test four",async({page})=>{

    await page.goto("https://arunmotoori.github.io/m6.html");
    await page.waitForTimeout(2000);
    const links = await page.getByRole("link");

    for(let i=0;i<await links.count();i++){

        const link = await links.nth(i).getAttribute("href");
        console.log(link);
    }
    
});

test("allinnertext",async({page})=>{

    await page.goto("https://arunmotoori.github.io/m6.html");
    await page.waitForTimeout(2000);
    const links = await page.getByRole("link");
    const link = await links.allInnerTexts();

    for(const linka of link){
        console.log(linka);
    }
    
});

test("inputvalue",async({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.waitForTimeout(2000);
    await page.getByPlaceholder("E-Mail Address").fill("lakshrachatwar@gmail.com");
    const inputvalue = await page.getByPlaceholder("E-Mail Address").inputValue();
    await page.getByPlaceholder("Password").fill("laksh 123");
    const inputvalue2 = await page.getByPlaceholder("Password").inputValue();
    console.log(inputvalue);
    console.log(inputvalue2);
});


