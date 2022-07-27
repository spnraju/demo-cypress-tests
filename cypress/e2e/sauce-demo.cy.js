/// <reference types="cypress" />

context('Saucedemo', () => {
  beforeEach('launch URL', () => {
    cy.visit('https://www.saucedemo.com/');
  })
  it('Open login page', () => {
    cy.get('.login_logo').should('be.visible');
  })
})
