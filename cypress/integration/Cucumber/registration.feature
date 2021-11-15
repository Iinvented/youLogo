Feature: Registration

    Scenario: Navigating to authentication page
        Given user is on the main page
        When clicking on the Sign in button
        Then authentication page should open successfully
      

    Scenario: navigating to account creation page
        Given user is on the authentication page
        When user enters a fresh email address into the text box
        And clicks on the create-an-account button
        Then account creation page should open successfully

    Scenario: navigating to my-account page
        Given user is on the authentication page
        And user enters a fresh email address into the text box
        And clicks on the create-an-account button
        When user enters the proper information
        And clicks on the register button
        Then my account page should open successfully
        When user ckicks on the logout button
        Then user should logout successfully