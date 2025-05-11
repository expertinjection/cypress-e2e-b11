/// <reference types="cypress"/>

describe("Cypress Custom Commands", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend");
    cy.clickCard("HTML Elements");
  });

  it("Parent Command", () => {

  });
  it("Child Command", () => {
    
  })
});
