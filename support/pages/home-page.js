const {click,button, write,$, screenshot, dropDown} = require('taiko');
const assert = require("assert");

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};

const isUserOnHomePage = async function(){
    assert.ok(await $('.form').exists());
};

const enterData = async function(){
    await click(textBox($('#fullName')));
    await write(fullname);
    
    
    await click(textBox($('#country')));
    await write(country);
    
    
    await click(textBox($('[name="yob"]')));
    await write(yob);
    

    await click(textBox($('#position')));
    await write(position);
    
    await click(textBox($('#url')));
    await write(url);
    
    await click(textBox($('#risk')));
    await write(position);

    await click(dropDown($('#risk')));
    await dropDown($('#risk').select(risk_level));
};


const selectSave = async function(){
    await click(button('Save'));
};

const verifyMessage = async function(){
    assert.ok(await $('.modal-content').exists());
};

module.exports = {
    isUserOnHomePage,
    enterData,
    selectSave,
    verifyMessage
}