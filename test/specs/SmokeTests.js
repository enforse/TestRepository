const locators = require('../pageobjects/locators');
const action = require('../pageobjects/actions');
const steps = require('../steps/steps');


describe('Smoke test factorial calculator', () => {
    it('Check functional rule of factorial', async () => {
        await steps.openPage('https://qainterview.pythonanywhere.com/');
        await action.isClickableLocator(locators.titlePage());
        await action.setValue(locators.inputField(), '5');
        await action.click(locators.submitButton());
        await action.delay(3000);
        await steps.rightFactorial(5);
        await steps.factorialEqual(5, await steps.getResult());
    });
    it('Check color alert field - red', async () => {
        await steps.openPage('https://qainterview.pythonanywhere.com/');
        await action.isClickableLocator(locators.titlePage());
        await action.click(locators.submitButton());
        await action.delay(3000);
        await steps.expectedColor(locators.inputField(), 'border: 2px solid red;')
    });
    it('Check result factorial, if input 1 or 0', async () => {
        await steps.openPage('https://qainterview.pythonanywhere.com/');
        await action.isClickableLocator(locators.titlePage());
        await action.setValue(locators.inputField(), '0');
        await action.click(locators.submitButton());
        await action.delay(3000);
        await steps.rightFactorial(0);
        await steps.factorialEqual(0, await steps.getResult());
        await steps.reloadPage();
        await action.setValue(locators.inputField(), '1');
        await action.click(locators.submitButton());
        await action.delay(3000);
        await steps.rightFactorial(1);
        await steps.factorialEqual(1, await steps.getResult());
    });
    it('Check result if input -1', async () => {
        await steps.openPage('https://qainterview.pythonanywhere.com/');
        await action.isClickableLocator(locators.titlePage());
        await action.setValue(locators.inputField(), '-1');
        await action.click(locators.submitButton());
        await action.delay(3000);
        await steps.textAlertEqual(locators.result(), 'Please enter an integer');
    });
    it('Check result if input - symbols', async () => {
        await steps.openPage('https://qainterview.pythonanywhere.com/');
        await action.isClickableLocator(locators.titlePage());
        await action.setValue(locators.inputField(), '%%$');
        await action.click(locators.submitButton());
        await action.delay(3000);
        await steps.textAlertEqual(locators.result(), 'Please enter an integer');
    });
    it('Check empty field of input', async () => {
        await steps.openPage('https://qainterview.pythonanywhere.com/');
        await action.isClickableLocator(locators.titlePage());
        await action.click(locators.submitButton());
        await action.delay(3000);
        await steps.textAlertEqual(locators.result(), 'Please enter an integer');
    });
    it('Check result factorial 170', async () => {
        await steps.openPage('https://qainterview.pythonanywhere.com/');
        await action.isClickableLocator(locators.titlePage());
        await action.setValue(locators.inputField(), '170');
        await action.click(locators.submitButton());
        await action.delay(3000);
        // await steps.textAlertEqual(locators.result(), await steps.rightFactorial(170));

        await steps.rightFactorial(170);
        await steps.factorialEqual(170, await steps.getResult());
    });
    it('Check result factorial 171', async () => {
        await steps.openPage('https://qainterview.pythonanywhere.com/');
        await action.isClickableLocator(locators.titlePage());
        await action.setValue(locators.inputField(), '171');
        await action.click(locators.submitButton());
        await action.delay(3000);
        await steps.textAlertEqual(locators.result(), 'The factorial of 171 is: Infinity');

    });
    it('Test Privacy Page', async () => {
        await steps.openPage('https://qainterview.pythonanywhere.com/');
        await action.isClickableLocator(locators.titlePage());
        await action.click(locators.privacyButton());
        await action.delay(3000);
        await steps.existPage('https://qainterview.pythonanywhere.com/privacy')
    });
    it('Test Terms Page', async () => {
        await steps.openPage('https://qainterview.pythonanywhere.com/');
        await action.isClickableLocator(locators.titlePage());
        await action.click(locators.termsAndConditionsButton());
        await action.delay(3000);
        await steps.existPage('https://qainterview.pythonanywhere.com/terms')

    });
});