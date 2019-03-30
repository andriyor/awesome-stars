import { browser } from "webextension-polyfill-ts";

browser.runtime.onInstalled.addListener((details) => {
  console.log("previous version", details.previousVersion);
});

console.log(`'Allo 'Allo! Event Page`);
