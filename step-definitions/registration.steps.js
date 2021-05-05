const { Given, When, Then } = require('@cucumber/cucumber');
const faker = require('faker');
const Page = require('../pageobjects/page');
const Header = require('../components/header.component');
const { CreateAccountPage } = require('../pageobjects/createaccount.page');

let signInPage, createAccountPage, myAccountPage;
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

Given(/^I am on the signin page$/, () => {
    Page.openHomePage();
    signInPage = Header.goToSignInPage();
});

When(/^I enter email address in the email input field$/, () => {
   signInPage.enterEmailAddress(faker.internet.email());
});

When(/^I click on the Create an account button$/, () => {
    signInPage.clickCreateAccount();
 });

Then(/^I see the Create an account page$/, () => {
    createAccountPage = new CreateAccountPage();
});

Then(/^I enter personal information$/, () => {
    createAccountPage.selectGender(faker.name.prefix());
    createAccountPage.enterFirstName(firstName);
    createAccountPage.enterLastName(lastName);
    createAccountPage.enterPassword(faker.internet.password());
    createAccountPage.selectDateOfBirth("23", "10", "1992");
 });

 Then(/^I enter address and contact information$/, () => {
    createAccountPage.enterCompanyName(faker.company.companyName());
    createAccountPage.enterAddress(faker.address.streetName());
    createAccountPage.enterCity(faker.address.city());
    createAccountPage.enterState(faker.address.state());
    createAccountPage.enterZipcode(faker.address.zipCode());
    createAccountPage.enterMobileNumber(faker.phone.phoneNumberFormat());
 });

 When(/^I click on the Register button$/, () => {
    myAccountPage = createAccountPage.clickRegisterButton(true);
});

 Then(/^I should see my account page$/, () => {
    expect(browser).toHaveTitleContaining(`My account - M Store`);
 });

 Then(/^User name should be displayed$/, () => {
    expect(myAccountPage.accountName).toHaveTextContaining(`${firstName} ${lastName}`);
});


