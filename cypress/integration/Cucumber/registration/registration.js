import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps"
const { fake } = require('faker');
const faker = require("faker");
Given('user is on the main page', () => {
    cy.visit("/");
})
When('clicking on the Sign in button', () => {
    cy.get('.login').should('be.visible');
    cy.get('.login').click();
})
Then('authentication page should open successfully', () => {
    cy.get('.navigation_page').should('be.visible');
    cy.get('.page-heading').should('be.visible');
    cy.get('#create-account_form > .page-subheading').should('be.visible');
    cy.get('#login_form > .page-subheading').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#passwd').should('be.visible');

    cy.get('#email_create').should('be.visible');
    cy.get('#SubmitCreate > span').should('be.visible');
    cy.get('#SubmitLogin > span').should('be.visible');
    cy.get('.lost_password > a').should('be.visible');
})



Given('user is on the authentication page', () => {
    cy.visit("?controller=authentication&back=my-account")
})
When('user enters a fresh email address into the text box', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email_create').clear();
    cy.get('#email_create').type(faker.internet.email());

    /* ==== End Cypress Studio ==== */
})
And('clicks on the create-an-account button', () => {
    cy.get('#SubmitCreate > span').click();
})

Then('account creation page should open successfully', () => {
    cy.get('.page-heading').should('be.visible');
    cy.get('.navigation_page').should('be.visible');
    cy.get(':nth-child(3) > .top').should('be.visible');
    cy.get(':nth-child(4) > .top').should('be.visible');
    cy.get('#customer_firstname').should('be.visible');

    cy.get(':nth-child(1) > :nth-child(3) > label').invoke('text').as("buttonText");
    cy.get("@buttonText").then(($x) => {
        expect($x).contains("First name *")
    })

    cy.get(':nth-child(1) > :nth-child(4) > label').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("Last name *")
    })

    cy.get('#customer_lastname').should('be.visible');

    cy.get(':nth-child(1) > :nth-child(5) > label').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("Email *")
    })
    cy.get(':nth-child(1) > :nth-child(5) > label').should('be.visible');

    cy.get('.password > label').should('be.visible');
    cy.get('.password > label').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("Password *")
    })
    cy.get('#passwd').should('be.visible');

    cy.get(':nth-child(1) > :nth-child(7) > label').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("Date of Birth")
    })
    cy.get(':nth-child(1) > :nth-child(7) > label').should('be.visible');
    cy.get('#days').should('be.visible');

    cy.get('#months').should('be.visible');
    cy.get('#years').should('be.visible');
    cy.get(':nth-child(1) > :nth-child(8) > label').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("Sign up for our newsletter!")
    })
    cy.get(':nth-child(1) > :nth-child(9) > label').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("Receive special offers from our partners!")
    })
    cy.get('#newsletter').should('be.visible')
    cy.get('#optin').should('be.visible')
    cy.get(':nth-child(2) > .page-subheading').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("Your address")
    })




})


Given('user is on the account creation page', () => {
    cy.visit("?controller=authentication&back=my-account#account-creation")

})
When('user enters the proper information', () => {
    cy.get(':nth-child(3) > .top').click()
    cy.get('#customer_firstname').clear();
    cy.get('#customer_firstname').type('ramo');
    cy.get('#customer_lastname').clear();
    cy.get('#customer_lastname').type('hoaci');
    cy.get('#passwd').clear();
    cy.get('#passwd').type('Hello1234');
    cy.get('#days').select('5');
    cy.get('#months').select('4');
    cy.get('#years').select('1998');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('#company').clear();
    cy.get('#company').type('gunnow');
    cy.get('#address1').clear();
    cy.get('#address1').type('123 wells branch');
    cy.get('#address2').click();
    cy.get('#city').clear();
    cy.get('#city').type('austin');
    cy.get('#id_state').select('3');
    cy.get('#postcode').clear();
    cy.get('#postcode').type('78728');
    cy.get('#other').click();
    cy.get('#account-creation_form > :nth-child(2)').click();
    cy.get('#phone').clear();
    cy.get('#phone').type('5236789756');
    cy.get('#phone_mobile').clear();
    cy.get('#phone_mobile').type('6543218968');
    cy.get('#alias').click();


})
And('clicks on the register button', () => {
    cy.get('#submitAccount > span > .icon-chevron-right').click();
})
Then('my account page should open successfully', () => {
    cy.get('.navigation_page').click();
    cy.get('.page-heading').should('be.visible')
    cy.get('.info-account').click();
    cy.get('li > .btn > span').click();
})

When('user ckicks on the logout button', () => {
    cy.get('.logout').should('be.visible');
    cy.get('.logout').click();
})

Then('user should logout successfully', () => {
    cy.get('.login').should('be.visible')
})