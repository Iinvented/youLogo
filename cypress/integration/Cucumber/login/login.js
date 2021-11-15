/// <reference types="cypress" />
import{Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"
const { fake } = require('faker');
const faker = require("faker");

Given('user is on the main page',()=>{
    cy.visit("/");
 })
 When('clicked on the Sign in button',()=>{
     cy.get('.login').should('be.visible');
     cy.get('.login').click();
 })
 Then('authentication page gets open successfully',()=>{
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


When('user enters the email adress',()=>{
    cy.get('#email').clear();
    cy.get('#email').type(Cypress.env("username"));
})
And('enters the password',()=>{
    cy.get('#passwd').clear();
    cy.get('#passwd').type(Cypress.env("password"));
})
And('clicks on the sign in button',()=>{
    cy.get('#SubmitLogin > span').click();
  
})
Then('user gets logged in in youLogo successfully',()=>{
    cy.get('.page-heading').should('be.visible')
})

When('user clicks on the logout button',()=>{
    cy.get('.logout').click();
})
Then('user gets logged outt from the youLogo',()=>{
    cy.get('.page-heading').should('be.visible');
})
When('user forgot-your-password linktext',()=>{
/* ==== Generated with Cypress Studio ==== */
cy.get('.lost_password > a').click();


/* ==== End Cypress Studio ==== */
})

And('enters the email address',()=>{
    cy.get('#email').clear();
    cy.get('#email').type(Cypress.env("username"));
}) 
And('clicks on the retrive_password button',()=>{
cy.get('.submit > .btn > span').click();
})
Then('user should receive an email to reset the password',()=>{
 cy.get('.alert').should('be.visible');
})
