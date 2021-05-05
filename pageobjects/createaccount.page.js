const { MyAccountPage } = require("./myaccount.page");

class CreateAccountPage {
    constructor() {
        expect(this.createAccountHeader).toBeDisplayed();
    }

    get createAccountHeader() {
        return $(`//h1[contains(text(), 'Create an account')]`);
    }

    get prefixMr() {
        return $(`#uniform-id_gender1`);
    }

    get prefixMrs() {
        return $(`#id_gender2`);
    }

    get firstNameInput() {
        return $(`#customer_firstname`);
    }

    get lastNameInput() {
        return $(`#customer_lastname`);
    }

    get passwordInput() {
        return $(`#passwd`);
    }

    get birthDate() {
        return $(`#days`);
    }

    get birthMonth() {
        return $(`#months`);
    }

    get birthYear() {
        return $(`#years`);
    }

    get addressFirstName() {
        return $(`//input[@name='firstname']`);
    }

    get addressLastName() {
        return $(`//input[@name='lasttname']`);
    }

    get companyInput() {
        return $(`#company`);
    }

    get addressInput() {
        return $(`#address1`);
    }

    get cityInput() {
        return $(`#city`);
    }

    get stateInput() {
        return $(`#id_state`);
    }

    get zipCodeInput() {
        return $(`#postcode`);
    }

    get countryInput() {
        return $(`#id_country`);
    }

    get mobileNumberInput() {
        return $(`#phone_mobile`);
    }

    get addressAliasName() {
        return $(`#alias`);
    }

    get registerButton() {
        return $(`#submitAccount`);
    }

    selectGender(gender) {
        gender.includes(`mrs`) ? this.prefixMrs.click() : this.prefixMr.click();
    }

    enterFirstName(firstName) {
        this.firstNameInput.setValue(firstName);
    }

    enterLastName(lastName) {
        this.lastNameInput.setValue(lastName);
    }

    enterPassword(password) {
        this.passwordInput.setValue(password);
    }

    selectDateOfBirth(birthDateValue, birthMonthValue, birthYearValue) {
        this.birthDate.selectByAttribute(`value`, birthDateValue);
        this.birthMonth.selectByAttribute(`value`, birthMonthValue);
        this.birthYear.selectByAttribute(`value`, birthYearValue);
    }

    enterAddressFirstName(firstName) {
        this.addressFirstName.setValue(firstName);
    }

    enterAddressLastName(lastName) {
        this.addressLastName.setValue(lastName);
    }

    enterCompanyName(company) {
        this.companyInput.setValue(company);
    }

    enterAddress(address) {
        this.addressInput.setValue(address)
    }

    enterCity(city) {
        this.cityInput.setValue(city);
    }

    enterState(state) {
        this.stateInput.selectByVisibleText(state);
    }

    enterZipcode(zipcode) {
        this.zipCodeInput.setValue(zipcode.substr(0, 5))
    }

    enterMobileNumber(mobileNumber) {
        this.mobileNumberInput.setValue(mobileNumber);
    }

    enterAddressAlias() {
        this.addressAliasName.setValue(`My Home Address`);
    }

    clickRegisterButton(success) {
        this.registerButton.click();
        if(success) return new MyAccountPage();
    }


} 

module.exports = { CreateAccountPage }