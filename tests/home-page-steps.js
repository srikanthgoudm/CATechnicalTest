/* globals gauge*/
"use strict";
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
const homePage = require('../support/pages/home-page.js');
step("I am on the homepage", async function () {
    await homePage.isUserOnHomePage();
});


step("I enter new entity with the data <fullname>, <country>, <yob>, <position>, <url>, <risk_level>", async function (fullname,country,yob,position,url, risk_level) {
    homePage.enterData()
});

step("I select save", async function () {
    await homePage.selectSave();
});


step("I should see message on pop up with <fullname>", async function (fullname) {
    await homePage.verifyMessage();
});

 
