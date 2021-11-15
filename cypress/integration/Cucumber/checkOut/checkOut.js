/// <reference types="cypress" />
import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps"
const { fake } = require('faker');
const faker = require("faker");


Given('user is logged into the youLogo', () => {
    cy.login(Cypress.env("username"), Cypress.env("password"))
    cy.visit("/");
})
And('cart is empty', () => {
    cy.get('.ajax_cart_no_product').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("empty")
    })
})

And('a sample product is inserted into the youLogo', () => {
    // add a sample product, then find the same exact product in cart
})
And('the product is found on youLogo', () => {
    cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('be.visible');
})
When('adding this product to the cart', () => {
    cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
})

Then('user should be able to check out successfully', () => {

    cy.get('.layer_cart_product > h2').invoke('text').as("theText");
    cy.get("@theText").then(($x) => {
        expect($x).contains("Product successfully added")
    })

    //assertions 

    cy.get('#layer_cart_product_price').should('have.text', "$16.51")
    cy.get('.button-medium > span').click();
    cy.get('#cart_title').contains("Shopping-cart summary")
    cy.get(':nth-child(1) > .address > :nth-child(4) > .address_address1').contains("123 wells branch")
    cy.get('.cart_navigation > .button > span').click();
    cy.get('.page-heading').contains("Addresses")
    cy.get('.cart_navigation > .button > span').click();
    cy.get('.page-heading').contains("Shipping")
    cy.get('#cgv').click();
    cy.get('.cart_navigation > .button > span').click();
    cy.get('.page-heading').contains("Please choose your payment method")
    cy.get('#total_product').contains("$16.51")
    cy.get('.bankwire').click();
    cy.get('.page-heading').contains("Order summary")
    cy.get('.page-subheading').contains("Bank-wire payment")
    cy.get('#cart_navigation > .button > span').click();
    cy.get('.page-heading').contains("Order confirmation")
    cy.get('.cheque-indent > .dark').contains("Your order on My Store is complete.")



})
