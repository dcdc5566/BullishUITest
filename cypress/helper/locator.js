'use strict';
let LOCATORS = {
    homePage: {

        formAuthenticationLink : "//a[@href='/login']",
        subHeaderMessage : '.subheader',
        headerMessage : 'h2',


    },
    signPage: {
        emailTextField :  "#username",
        passwordTextField :  "#password",
        signInButton : "//*[@name='login']//button[@type='submit']",
        emailLabel : "//label[@for='username']",
        passwordLabel : "//label[@for='password']",

        signInHeader : "//h1",
        errorMessage : "//*[@class='alert alert-danger']",
        emailNotAvalibleInlineErrror : "#auth-email-missing-alert > div > div",
        passwordNotAvalibleInlineError : "#auth-password-missing-alert > div > div"
    },

    loggedInHomePage: {
        successfulFlashMessage : '#flash',
        headerMessage : 'h2',
        subHeaderMessage : '.subheader',
        logoutButton : "//a[@href='/logout']"
    },
   
   
};

module.exports = Object.freeze(LOCATORS);