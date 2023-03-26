/// <reference types='cypress' />

describe('User login', () => {
  it('User can login', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href="/login"]').should('contain', 'Login').click();
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('testing12345');
    cy.get('form').submit();
    cy.get('#navbarSupportedContent').should('contain', 'Signed in as Liam Naylor')
  });
});