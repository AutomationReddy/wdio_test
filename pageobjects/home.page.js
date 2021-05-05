class HomePage {
    constructor() {
        expect(this.homePageSlider).toBeDisplayed();
    }

    get homePageSlider() {
        return $(`#homepage-slider`);
    }

}

module.exports = { HomePage }