Feature: Login Test Feature file with Email and password
    As a type of user
    I want Login into shopping website
    So that user can access product listing page
    Background: Naviagte to shopping login page
        Given I open given application url

    Scenario Outline:  User login into website with valid username and password
        Given User enter email as "<emailId>"
        And User entre password as "<password>"
        When User click on signIn button
        Then User should be on product listing page
        And User click on logout link
        Examples:
            | emailId                      | password  |
            | tomsmith                     | SuperSecretPassword! |


       Scenario Outline:  User login into website with invalid username and password
        Given User enter email as "<emailId>"
        And User entre password as "<password>"
        When User click on signIn button
        And User should be on sign up page with error as "<error>"
        Examples:
            | emailId                      | password  | error |
            | tomsmith1                    | SuperSecretPassword!  |  Your username is invalid!|      
            | tomsmith                     | SuperSecretPassword!1 |  Your password is invalid!|       