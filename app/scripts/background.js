// Enable chromereload by uncommenting this line:
// eslint-disable-next-line import/no-extraneous-dependencies
import 'chromereload/devonly';

import lodash from 'lodash';
import { Router } from 'chomex';
import ChromePromise from 'chrome-promise';

const router = new Router();
const chromep = new ChromePromise();
const storage = chromep.storage.local;

const Key = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
};

function log(...args) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log.apply(null, args);
  }
}

chrome.browserAction.onClicked.addListener(() => {
  if (chrome.runtime.openOptionsPage) { // New way to open options pages, if supported (Chrome 42+).
    return chrome.runtime.openOptionsPage();
  }
  return window.open(chrome.runtime.getURL('options.html')); // Reasonable fallback.
});

router.on('/access-token/get', () => storage.get(Key.ACCESS_TOKEN).then((result) => {
  const accessToken = result[Key.ACCESS_TOKEN];

  log('/access-token/get called with response: ', accessToken);

  if (!lodash.isString(accessToken)) {
    return null;
  }

  return accessToken;
}));

router.on('/access-token/set', (message) => {
  const { accessToken } = message;

  log('/access-token/set called with request:', accessToken);

  const payload = {
    [Key.ACCESS_TOKEN]: accessToken,
  };

  return storage.set(payload).then(() => true);
});

chrome.runtime.onMessage.addListener(router.listener());
