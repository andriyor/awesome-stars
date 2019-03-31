import { browser } from "webextension-polyfill-ts";

import { RATE_LIMIT } from "./constants";

async function onRuntimeInstalled(details): Promise<void> {
    console.log("previous version", details.previousVersion);
}

async function onTabsUpdated(tabId, changeInfo, tab): Promise<void> {
    if (~tab.url.indexOf("github.com")) {
        await browser.pageAction.show(tabId);
    }
}

browser.contextMenus.create({
    id: RATE_LIMIT,
    title: "Rate Limit: 0 / 5,000",
    contexts: ["page_action"]
});

browser.runtime.onInstalled.addListener(onRuntimeInstalled);
browser.tabs.onUpdated.addListener(onTabsUpdated);
