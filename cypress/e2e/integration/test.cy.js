/// <reference types="cypress"/>

describe('project 01 Cypress ', () => {
  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/form-elements')
  });

  /**
   * Navigate to https://techglobal-training.com/frontend/form-elements
   *Validate the heading is “Contact Us”
   *Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
   *Validate the email is “info@techglobalschool.com"
   *Validate the phone number is “(224) 580-2150”
   */
  it('Test Case 01 - Validate the Contact Us information', () => {
    cy.get('.is-size-3').should('have.text', 'Contact Us')
  });
  /**
   * 1. Check on the Apple checkbox button
   * 2. Then Validate its checked
   * 3. Uncheck the Apple checkbox button
   * 4. Validate its unchecked
   */

});


