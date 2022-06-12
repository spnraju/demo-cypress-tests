/// <reference types="cypress" />

context('Internet', () => {
  beforeEach('Launch URL', () => {
    cy.visit('https://the-internet.herokuapp.com/');
  })
  it('Open home page', () => {
    cy.get('.heading').should('be.visible');
  })
})
