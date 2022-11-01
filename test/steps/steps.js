const action = require("../pageobjects/actions");
const locators = require("../pageobjects/locators");
const { assert, expect } = require('chai');

class Steps {

    async openPage (page) {
        await browser.url(page);
    }

    async rightFactorial (numb){
        async function factorial(n){
            let result = 1;
            while(n){
                result *= n--;
            }
            return result;
        }

        return await factorial(numb);
    }

    async factorialEqual (numb, numberResult){
        let rightFact = await this.rightFactorial(numb);
        if (rightFact === Number(numberResult)) {
            console.log('Factorial is true!')
        } else {
            throw new Error(`Factorial is not true! Expected - ${rightFact}. Actual - ${numberResult}`)
        }
    }

    async getResult () {
        let resultText = await action.getText(locators.result());
        return (resultText.split(':'))[1].trim();
    }
    async expectedColor (locator, expectColor) {
        let currentColor = await action.getAttribute(locator, 'style');

        if(currentColor === null){
            console.log('Style not found!')
        }else{
            await expect(currentColor).to.equal(expectColor, `Style not equal!`);
        }
    }

    async reloadPage () {
        await browser.refresh();
    }
    async textAlertEqual (locator, message) {
        await action.waitForElement(locator);
        const text = await action.getText(locator);
        if (text !== '') {
            await assert.strictEqual(
                text.trim(),
                message,
                `Сообщения не совпадают`
            );
        }
    }
    async existPage (page) {
        const currentUrl = await browser.getUrl();
        await assert.strictEqual(
            currentUrl.includes(page),
            true,
            `Текущий URL не соответствует тому, по которому я перешел: ${page}, ${currentUrl}`
        );
    }
}
module.exports = new Steps();
