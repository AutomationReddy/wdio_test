const { CreateAccountPage } = require("./createaccount.page");

class SignInPage {
    constructor() {
        expect(this.authenticationHeader).toBeDisplayed();
    }

    get authenticationHeader() {
        return $(`//h1[contains(text(), 'Authentication')]`);
    }

    get emailInput() {
        return $(`#email_create`);
    }

    get createAccountBtn() {
        return $(`#SubmitCreate`);
    }

    enterEmailAddress(emailAddress) {
        this.emailInput.setValue(emailAddress);
    }

    clickCreateAccount() {
        this.createAccountBtn.click();
        return new CreateAccountPage();
    }
}

module.exports = { SignInPage }
