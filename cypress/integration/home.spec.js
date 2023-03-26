/// <reference types="cypress" />

describe('Jungle Rails', () => {

  // beforeEach(() => {
  //   cy.visit('http://localhost:3000/');
  // });

  it("The home page loads", () => {
    cy.visit('http://localhost:3000/');
  });

  it("There are products on the home page", () => {
    cy.visit('http://localhost:3000/');
    cy.get(".products article").should("be.visible");
  });

  it("There are two products on the home page", () => {
    cy.visit('http://localhost:3000/');
    cy.get(".products article").should("have.length", 2);
  });

});