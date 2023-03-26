/// <reference types="cypress" />

describe('Home page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it("The home page loads", () => {
  });

  it("There are products on the home page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("There are two products on the home page", () => {
    cy.get(".products article").should("have.length", 2);
  });

});