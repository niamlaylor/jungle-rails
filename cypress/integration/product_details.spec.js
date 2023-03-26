/// <reference types="cypress" />

describe('Product details', () => {
  it("Can select a product from the home page and navigate to the correct product detail page", () => {
    cy.visit('http://localhost:3000/');
    cy.get(".products article").first().click();
    cy.url().should('include', '/products');
  });
});