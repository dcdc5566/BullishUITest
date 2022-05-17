import { Given } from "cypress-cucumber-preprocessor/steps";
import locator from "../../helper/locator";

let constants = require('../../helper/appConstants');
let locators = require('../../helper/locator');


Given(`I open given application url`, () => {
    cy.visit(constants.url.loginurl);
    cy.title().should("include", constants.text.webpageTitle);
    cy.scrollTo(0, 800);
    cy.xpath(locators.homePage.formAuthenticationLink).click();
    cy.get(locators.homePage.headerMessage).should('include.text', constants.text.loginHeadingMessage)
    cy.log(cy.xpath(locators.homePage.subHeaderMessage));
    cy.xpath(locators.homePage.subHeaderMessage).should('include.text', constants.text.loginSubHeaderMessage)


})

Given(`User enter email as {string}`, username => {
    cy.get(locators.signPage.emailTextField).type(username);
    cy.xpath(locators.signPage.emailLabel).should('include.text', constants.text.userNameLabelText)
})




Given(`User entre password as {string}`, password => {

    cy.get(locators.signPage.passwordTextField).type(password);
    cy.xpath(locators.signPage.passwordLabel).should('include.text', constants.text.passwordLabelText)

})

Given(`User click on signIn button`, () => {
    cy.xpath(locators.signPage.signInButton).click();

})

Given(`User should be on product listing page`, () => {
    cy.screenshot('Successful login');
    cy.get(locators.loggedInHomePage.flashMessagelocator).should('include.text', constants.text.successfulLoginFlashMessage)
    cy.get(locators.loggedInHomePage.headerMessage).should('include.text', constants.text.successfulLoginHeadingMessage)
    /cy.get(locators.loggedInHomePage.subHeaderMessage).should('include.text', constants.text.loginSubHeaderMessageOnSuccessfullogin)


})

Given(`User click on logout link`, () => {
    cy.xpath(locators.loggedInHomePage.logoutButton).click();
    cy.get(locators.loggedInHomePage.flashMessagelocator).should('include.text', constants.text.successfulLogoutFlashMessage)

})

Given(`User should be on sign up page with error as {string}`, (error) => {
    cy.get(locators.loggedInHomePage.flashMessagelocator).should('include.text', error);
    cy.screenshot(error);

})
