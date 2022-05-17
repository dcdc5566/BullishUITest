'use strict';

// I have create one javascipt file for locator with seprate section of page  .. We can use differnt file for each page locators 

let LOCATORS = {
    homePage: {

        formAuthenticationLink: "//a[@href='/login']",
        subHeaderMessage: "//h4[@class='subheader']",
        headerMessage: 'h2',


    },
    signPage: {
        emailTextField: "#username",
        passwordTextField: "#password",
        signInButton: "//*[@name='login']//button[@type='submit']",
        emailLabel: "//label[@for='username']",
        passwordLabel: "//label[@for='password']"
    },

    loggedInHomePage: {
        flashMessagelocator: '#flash',
        headerMessage: 'h2',
        subHeaderMessage: '.subheader',
        logoutButton: "//a[@href='/logout']"
    },


};

module.exports = Object.freeze(LOCATORS);