const locators = require('../pageobjects/locators');

class Actions {
    async waitForElement(locator) {
        const selector = await $(locator);
        await selector.waitForExist();
        await selector.waitForDisplayed();
    }

    async isClickableLocator(locator) {
        const selector = await $(locator);
        await selector.waitForExist();
        await selector.waitForClickable();

        return selector.isClickable();
    }
    async setValue(locator, value) {
        const selector = await $(locator);
        await selector.waitForExist();
        await selector.waitForClickable();
        await selector.waitForDisplayed();
        await selector.setValue(value);
    }
    async click(locator) {
        const selector = await $(locator);
        await selector.waitForClickable();
        await selector.waitForDisplayed();
        await selector.click();
    }
    async delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async getText(locator) {
        const selector = await $(locator);
        await selector.waitForExist();
        await selector.waitForDisplayed();

        return selector.getText();
    }
    async getAttribute(locator, attributeName) {
        const selector = await $(locator);
        await selector.waitForExist();

        return selector.getAttribute(attributeName);
    }
}
module.exports = new Actions();