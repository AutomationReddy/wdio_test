class MyAccountPage {
    constructor() {
        expect(this.myAccountHeader).toBeDisplayed();
    }

    get myAccountHeader() {
        return $(`//h1[contains(text(), 'My account')]`);
    }

    get accountName() {
        return $(`.account`);
    }
}

module.exports = { MyAccountPage }