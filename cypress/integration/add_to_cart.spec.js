/// <reference types="cypress" />

describe('Add to cart', () => {
  it("Can add 1x product to cart on home page and increase cart quant by 1", () => {
    cy.visit('http://localhost:3000/');
    cy.get('li.nav-item a.nav-link')
    .should('contain', 'My Cart (0)');
    cy.get("form.button_to button.btn").first().click({ force: true });
    cy.get('li.nav-item a.nav-link')
      .should('contain', 'My Cart (1)');
  });
});