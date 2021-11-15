/// <reference types="cypress" />
import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps"
const { fake } = require('faker');
const faker = require("faker");

Given('user is on the main page', () => {
    cy.visit("/");
})

And('user clicks on the contact_us button', () => {
    cy.get('#contact-link > a').click();
})
And('customer_service page gets open', () => {
    cy.get('.page-heading').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("Customer service - Contact us")
    })
})
When('user picks Customer_service from dropdown', () => {
    cy.get('#id_contact').select('2');
})
When('user picks Webmaster from dropdown', () => {
    cy.get('#id_contact').select('1');
})
And('enters the email address', () => {
    cy.get('#email').clear();
    cy.get('#email').type(Cypress.env("username"));
})
And('enters the order reference', () => {
    cy.get('#id_order').clear();
    cy.get('#id_order').type('RS322454545');
})
And('attaches the file', () => {
    const path = 'crs.png';
    cy.get('#fileUpload').attachFile(path)

})
And('adds a message', () => {
    cy.get('#message').type(" a sample message")

})
And('clicks on the send button', () => {
    cy.get('#submitMessage > span').click();

})
Then('confirmation message should be visble', () => {
    cy.get('.alert').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("Your message has been successfully sent to our team.")
    })
})
