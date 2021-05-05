const { SignInPage } =  require("../pageobjects/signin.page");

class Header {
    get signIn() {
        return $(`#header .login`);
    }

    clickSignInButton() {
        this.signIn.click();
    }

    goToSignInPage() {
        this.clickSignInButton();
        return new SignInPage();
    }
}

module.exports = new Header();