// Write your solution below
/// <reference types="cypress"/>
describe ('Cypress01 project ', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/login')
    })
    it('Test Case 01 - Validate the login form', () => {
        cy.get('#username')
        .should('be.visible')
        .not('.required')
        cy.get('[for="username"]')
        .should('have.text', 'Please enter your username')
        cy.get('#password')
        .should('be.visible')
        .not('.required')
        cy.get('[for="password"]')
        .should('have.text', 'Please enter your password')
        cy.get('#login_btn')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'LOGIN')
        cy.get('a[href="/frontend/login"]')
        .should('be.visible')
        .and('have.text', 'Forgot Password?')
        .and('not.be.disabled')
  })
  it('Test Case 02 - Validate the valid login', () => {
    cy.get('#username').type('TechGlobal')
    cy.get('#password').type('Test1234')
    cy.get('#login_btn').click()
    cy.get('#success_lgn')
    .should('have.text', 'You are logged in')
    cy.get('#logout')
    .should('be.visible')
    .and('have.text', 'LOGOUT')
  })

  it('Test Case 03 - Validate the logout', () => {
    cy.get('#username').type('TechGlobal')
    cy.get('#password').type('Test1234')
    cy.get('#login_btn').click()
    cy.get('#logout').click()
    cy.get('[for="username"]')
    .should('have.text', 'Please enter your username')

  })
  it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {
    cy.get('a[href="/frontend/login"]')
    .should('be.visible')
    .and('have.text', 'Forgot Password?')
    .click()
    cy.get('#modal_title')
    .should('be.visible')
    .and('have.text', 'Reset Password')
    cy.get('button[aria-label="close"]')
    .should('be.visible')
    cy.get('#email')
    .should('be.visible')
    cy.get('label[for="email"]')
    .should('be.visible')
    .and('have.text', "Enter your email address and we'll send you a link to reset your password. ")
    cy.get('#submit')
    .should('be.visible')
    .and('not.be.disabled')
    .and('have.text', 'SUBMIT')
  })
  it('Test Case 05 - Validate the Reset Password modal close button', () => {
    cy.get('a[href="/frontend/login"]')
    .should('be.visible')
    .and('have.text', 'Forgot Password?')
    .click()
    cy.get('.modal-card ')
    .should('be.visible')
    cy.get('button[aria-label="close"]')
    .click()
    cy.get('h1[class="is-size-3"]').should('have.text', 'Login Form')
  })
  it('Test Case 06 - Validate the Reset Password form submission', () => {
    cy.get('a[href="/frontend/login"]')
    .should('be.visible')
    .and('have.text', 'Forgot Password?')
    .click()
    cy.get('#email')
    .type('techgloabl67@gmail.com')
    cy.get('#submit')
    .click()
    cy.get('#confirmation_message')
    .should('be.visible')
    .and('have.text', 'A link to reset your password has been sent to your email address.')
    cy.get('#submit').then(($submit) => {
        const submitBottom = $submit[0].getBoundingClientRect().bottom;
      
        cy.get('#confirmation_message').then(($message) => {
          const messageTop = $message[0].getBoundingClientRect().top;
      
          expect(messageTop).to.be.greaterThan(submitBottom);
        });
      });

  })
  it('Test Case 07 - Validate the invalid login with the empty credentials', () => {
    cy.get('#username')
    .should('have.value','')
    cy.get('#password')
    .should('have.value','')
    cy.get('#login_btn')
    .click()
    cy.get('#error_message')
    .should('have.text', 'Invalid Username entered!')
  })
  it('Test Case 08 - Validate the invalid login with the wrong username', () => {
    cy.get('#username')
    .type('John')
    cy.get('#password')
    .type('Test1234')
    cy.get('#login_btn')
    .click()
    cy.get('#error_message')
    .should('have.text', 'Invalid Username entered!')
  })
  it('Test Case 09 - Validate the invalid login with the wrong password', () => {
    cy.get('#username')
    .type('TechGlobal')
    cy.get('#password')
    .type('1234')
    cy.get('#login_btn')
    .click()
    cy.get('#error_message')
    .should('have.text', 'Invalid Password entered!')
  })
  it('Test Case 10 - Validate the invalid login with the wrong username and password', () => {
    cy.get('#username')
    .type('John')
    cy.get('#password')
    .type('1234')
    cy.get('#login_btn')
    .click()
    cy.get('#error_message')
    .should('have.text', 'Invalid Username entered!')
  })



})



