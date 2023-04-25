import type { Locator, Page } from "@playwright/test";
import { expect, test } from "@playwright/test";
import { fixtureURL } from "../../__test__/helpers.js";

test.describe("Button", () => {
  let page: Page;
  let element: Locator;
  let root: Locator;
  let control: Locator;

  test.beforeAll(async ({ browser }: any) => {
    page = await browser.newPage();

    element = page.locator("fast-button");

    root = page.locator("#root");

    control = element.locator(".control");

    await page.goto(fixtureURL("button--basic"));
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
})