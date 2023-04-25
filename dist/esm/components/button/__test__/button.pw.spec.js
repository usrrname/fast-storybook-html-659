import { expect, test } from "@playwright/test";
import { fixtureURL } from "../../__test__/helpers.js";
test.describe("Button", () => {
    let page;
    let element;
    let root;
    let control;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        element = page.locator("fast-button");
        root = page.locator("#root");
        control = element.locator(".control");
        await page.goto(fixtureURL("button--example"));
    });
    test.afterAll(async () => {
        await page.close();
    });
    test("should set the `disabled` attribute on the internal control", async () => {
        await root.evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-button disabled></fast-button>
            `;
        });
        await expect(control).toHaveBooleanAttribute("disabled");
        await element.evaluate(node => {
            node.toggleAttribute("disabled");
        });
        await expect(control).not.toHaveBooleanAttribute("disabled");
    });
});
//# sourceMappingURL=button.pw.spec.js.map