/* globals gauge*/
"use strict";
const { openBrowser,waitFor, closeBrowser, goto, deleteCookies, screenshot} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
const config = require("../support/global.config.js");

beforeScenario(async() => {
    await openBrowser({headless:false}, '--disable-notifications');
    await waitFor(5000);
    await goto(config.baseUrl);
});

afterScenario(async() => {
    await deleteCookies();
    await closeBrowser();
});

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};