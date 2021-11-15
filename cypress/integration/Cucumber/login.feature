Feature: Loging  feature


    Scenario: navigating to authentication page
        Given user is on the main page
        When clicked on the Sign in button
        Then authentication page gets open successfully

    Scenario: loggin into the youLogo
        Given user is on the main page
        And clicked on the Sign in button
        And authentication page gets open successfully
        When user enters the email adress
        And enters the password
        And clicks on the sign in button
        Then user gets logged in in youLogo successfully

    Scenario: Loging off from the youLogo
        Given user is on the main page
        And clicked on the Sign in button
        And authentication page gets open successfully
        And user enters the email adress
        And enters the password
        And clicks on the sign in button
        And user gets logged in in youLogo successfully
        When user clicks on the logout button
        Then user gets logged outt from the youLogo

    Scenario: forgot your password
        Given user is on the main page
        And clicked on the Sign in button
        And authentication page gets open successfully
        When user forgot-your-password linktext
        And enters the email address
        And clicks on the retrive_password button
        Then user should receive an email to reset the password

