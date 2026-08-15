/*
getByAltText(""); - done
getByLabel(""); - done
getByTitle(""); - done add text of tool tip
getByRole("");
getByPlaceholder(""); - done
getByTestId("");
getByText(""); - done add visible text on element
*/

import {test} from "@playwright/test";
import strict from "node:assert/strict";

test("get by alt text",async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    
    await page.getByAltText("iPhone 6").first().click();
    await page.waitForTimeout(2000);
});

test("get by label",async ({page})=>{

    await page.goto("https://www.amazon.in/?tag=msndeskabkin-21&hvadid=&hvqmt=&hvbmt=&hvdev=&ref=pd_sl_3if4jjs60e_e&tag=msndeskstdin-21&ref=pd_sl_uf5y0erb9_b&adgrpid=1313918794655169&hvadid=82120209294399&hvnetw=o&hvqmt=b&hvbmt=bb&hvdev=c&hvlocint=&hvlocphy=148911&hvtargid=kwd-82121070085630:loc-90&hydadcr=5621_2502672&mcid=6ef438e9b4403f079fa2256dbea608d9");
    await page.waitForTimeout(2000);
    await page.getByLabel("Search Amazon.in").fill("Laxmikant");
    await page.waitForTimeout(3000);
});

test("get by text", async ({page})=>{

    await page.goto("https://www.amazon.in/?tag=msndeskabkin-21&hvadid=&hvqmt=&hvbmt=&hvdev=&ref=pd_sl_3if4jjs60e_e&tag=msndeskstdin-21&ref=pd_sl_uf5y0erb9_b&adgrpid=1313918794655169&hvadid=82120209294399&hvnetw=o&hvqmt=b&hvbmt=bb&hvdev=c&hvlocint=&hvlocphy=148911&hvtargid=kwd-82121070085630:loc-90&hydadcr=5621_2502672&mcid=6ef438e9b4403f079fa2256dbea608d9");
    await page.waitForTimeout(3000);
    await page.getByText("Bestsellers").first().click();
    await page.waitForTimeout(2000);
})

test("get by title",async ({page})=>{
    await page.goto("https://www.amazon.in/?tag=msndeskabkin-21&hvadid=&hvqmt=&hvbmt=&hvdev=&ref=pd_sl_3if4jjs60e_e&tag=msndeskstdin-21&ref=pd_sl_uf5y0erb9_b&adgrpid=1313918794655169&hvadid=82120209294399&hvnetw=o&hvqmt=b&hvbmt=bb&hvdev=c&hvlocint=&hvlocphy=148911&hvtargid=kwd-82121070085630:loc-90&hydadcr=5621_2502672&mcid=6ef438e9b4403f079fa2256dbea608d9");
    await page.waitForTimeout(2000);
    await page.getByTitle("Search in").click();
    await page.waitForTimeout(2000);
});

test("get by placeholder",async ({page})=>{

    await page.goto("https://www.amazon.in/?tag=msndeskabkin-21&hvadid=&hvqmt=&hvbmt=&hvdev=&ref=pd_sl_3if4jjs60e_e&tag=msndeskstdin-21&ref=pd_sl_uf5y0erb9_b&adgrpid=1313918794655169&hvadid=82120209294399&hvnetw=o&hvqmt=b&hvbmt=bb&hvdev=c&hvlocint=&hvlocphy=148911&hvtargid=kwd-82121070085630:loc-90&hydadcr=5621_2502672&mcid=6ef438e9b4403f079fa2256dbea608d9");
    await page.waitForTimeout(2000);
    await page.getByPlaceholder("").fill("test 123");
    await page.waitForTimeout(2000);
});

test("get by testid",async ({page})=>{

    page.goto("file:///C:/Users/loq/Downloads/123.html");
    await page.waitForTimeout(2000);
    page.getByTestId("fName").fill("555");
    await page.waitForTimeout(2000);
});

test("get by testid two",async ({page})=>{

    await page.goto("file:///C:/Users/loq/Downloads/123.html");
    await page.waitForTimeout(2000);
    await page.getByTestId("emailAddress").fill("harry potter");
    await page.waitForTimeout(2000);
});
