Feature: Contact us

    Scenario: navigating to customer service page
        Given user is on the main page
        When user clicks on the contact_us button
        And customer_service page gets open

    Scenario: contact with customer service as subject heading
        Given user is on the main page
        And user clicks on the contact_us button
        And customer_service page gets open
        When user picks Customer_service from dropdown
        And enters the email address
        And enters the order reference
        And attaches the file
        And adds a message
        And clicks on the send button
        Then confirmation message should be visble

    Scenario: contact with webmaster as subject heading
        Given user is on the main page
        And user clicks on the contact_us button
        And customer_service page gets open
        When user picks Webmaster from dropdown
        And enters the email address
        And enters the order reference
        And attaches the file
        And adds a message
        And clicks on the send button
        Then confirmation message should be visble
