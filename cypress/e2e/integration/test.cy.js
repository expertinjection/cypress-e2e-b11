/// <reference types="cypress"/>

describe('Test Cases Autimation Exercise', () => {
  it('Test Case 1: Register User', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('body>#header').should('be.visible')
    cy.get('a[href="/login"]').click()
    cy.get('div[class="signup-form"]>h2')
      .should('be.visible')
      .and('have.text', 'New User Signup!')
    cy.get('input[data-qa="signup-name"]')
      .type('zicona')
    cy.get('input[data-qa="signup-email"]')
      .type('ziuyca@automation.com')
    cy.get('button[data-qa="signup-button"]').click()
    cy.get('h2[class="title text-center"]>b')
      .should('be.visible')
      .and('contain', 'Enter Account Information')
    cy.get('#id_gender1').check()
    cy.get('input[data-qa="name"]').type('dsdsad')
    //cy.get('input[data-qa="email"]').type('zicona@automation.com')
    cy.get('input[data-qa="password"]').type('1234Test!')
    cy.get('select[data-qa="days"]').select('4')
    cy.get('select[data-qa="months"]').select('8')
    cy.get('select[data-qa="years"]').select('2000')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('input[data-qa="first_name"]').type('zicona')
    cy.get('input[data-qa="last_name"]').type('micona')
    cy.get('input[data-qa="company"]').type('apples')
    cy.get('input[data-qa="address"]').type('89haval st, 21812, apples')
    cy.get('input[data-qa="address2"]').type('21cicro st, 214221, cgiago')
    cy.get('select[data-qa="country"]').select('United States')
    cy.get('input[data-qa="state"]').type('Illinois')
    cy.get('input[data-qa="city"]').type('Chicago')
    cy.get('input[data-qa="zipcode"]').type('59876')
    cy.get('input[data-qa="mobile_number"]').type('3218765432')
    cy.get('button[data-qa="create-account"]').click()
    cy.get('div>h2>b').should('be.visible').and('have.text', 'Account Created!')
    cy.get('a[data-qa="continue-button"]').click()
    cy.get('a>i.fa-user+b').should('be.visible')

  })

});


