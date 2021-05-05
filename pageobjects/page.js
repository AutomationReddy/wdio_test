const { HomePage } = require("./home.page");

class Page {

    openHomePage() {
        browser.url(``);
        return new HomePage();
    }

}

module.exports = new Page();