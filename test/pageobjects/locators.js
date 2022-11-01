class MainPage {
    titlePage = () => '[class="margin-base-vertical text-center"]';
    inputField = () => '//*[@id="number"]';
    submitButton = () => '//*[@id="getFactorial"]';
    result = () => '//*[@id="resultDiv"]';
    termsAndConditionsButton = () => '//*[@class="margin-base-vertical text-center wor_copyright"][1]/a[1]';
    privacyButton = () => '//*[@class="margin-base-vertical text-center wor_copyright"][1]/a[2]';
}

module.exports = new MainPage();
