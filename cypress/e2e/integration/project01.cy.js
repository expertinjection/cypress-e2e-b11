// Write your solution below
/// <reference types="cypress"/>
describe("Cypress01 project ", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/form-elements");
  });
  it("TC01 - Validate the Contact Us information", () => {
    cy.get(".is-size-3").as('header').should("be.visible").and('have.text', 'Contact Us')
    const expectedText = ['2800 S River Rd Suite 310, Des Plaines, IL 60018','info@techglobalschool.com','(224) 580-2150']
    cy.get('@header').nextAll().each((ele, index)=> {
      cy.wrap(ele).should('have.text', expectedText[index])
    })
  })
  it("TC02-Validate the Full name input box", () => {
    cy.get('[for="name"]').parent().find('input').should('be.visible')
      .and('have.attr','placeholder', 'Enter your full name')
      .and('have.attr', 'required')
      cy.get('[for="name"]').should('have.text', 'Full name *')
  })
  it('TC03-Validate the Gender radio button', () => {
    cy.contains('Gender *').should('have.text', 'Gender *')
    const expectedText =['Male', 'Female', 'Prefer not to disclose']
    cy.get('.radio > input').first().should('have.attr', 'required')
    cy.get('.radio > input').each(($ele, index) => {
      cy.wrap($ele)
        .parent()
        .should('have.text', expectedText[index])
      cy.wrap($ele).should('not.be.selected')
        .and('be.enabled')
    })
    cy.CheckoptionAndValidateOthers('Male', expectedText)
    cy.CheckoptionAndValidateOthers('Female', expectedText)
    cy.CheckoptionAndValidateOthers('Prefer not to disclose', expectedText)
  })

  const testCases = [
    {
     describtion: 'Address input box',
     label: 'Address',
     placeholder: 'Enter your address',
     required: false
    },
    {
      describtion: 'Email input box',
      label: 'Email *',
      placeholder: 'Enter your email',
      required: true
     },
     {
      describtion: 'Phone input box',
      label: 'Phone',
      placeholder: 'Enter your phone number',
      required: false
     },
     {
      describtion: 'Message text area',
      label: 'Message',
      placeholder: 'Type your message here...',
      required: false
     }

  ]
  testCases.forEach((test,index) => {
    it(`TC 0${index + 4} - ${test.describtion}`,() => {
      cy.contains('label', test.label).should('have.text', test.label)
      cy.contains('label', test.label).parent().find('input, textarea')
        .should('be.visible')
        .and('have.attr', 'placeholder', test.placeholder)
        .and(test.required ? 'have.attr' : 'not.have.attr', 'required')
    })
  })
  it('TC 08 - Validate the Consent checkbox', () => {
    cy.get('.checkbox > input').should('be.enabled')
      .click().should('be.checked')
      .click().should('not.be.checked')
      .and('have.attr', 'required')
  })
  it('TC 09 - Validate the SUBMIT button', () => {
    cy.get('.control > .button').should('be.visible')
      .and('be.enabled')
      .and('have.text', 'SUBMIT')
  })
  it('TC 10 - Validate the form submission', () => {
    const inputs = ['haitham', '2800 S River Rd Suite 310, Des Plaines, IL 60018', 'info@techglobalschool.com', '(224) 580-2150', 'HELLLO']
    cy.get('.control').find('.input, textarea').each(($el,index)=> {
      cy.wrap($el).type(inputs[index])
    })
    cy.contains('label', 'Male').find('input').check()
    cy.get('.checkbox').find('input').check()
    cy.get('.control > button').click()
    cy.on('uncaught:exception', () => {
      return false
    })
  })
})