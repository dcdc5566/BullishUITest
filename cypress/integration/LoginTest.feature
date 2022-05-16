Feature: Login Test Feature file with Email and password
    As a type of user
    I want Login into shopping website
    So that user can access product listing page
    Background: Naviagte to shopping login page
        Given I open given application url

    Scenario Outline:  User login into shopping website with valid username and password
        Given User enter email as "<emailId>"
        And User entre password as "<password>"
        When User click on signIn button
        Then User should be on product listing page
        And User click on logout link
        Examples:
            | emailId                      | password  |
            | tomsmith                     | SuperSecretPassword! |
