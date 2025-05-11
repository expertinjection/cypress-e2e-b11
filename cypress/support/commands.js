// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//


Cypress.Commands.add("CheckoptionAndValidateOthers", (optionTocheck, expectedText) => {
  cy.contains(optionTocheck).find('input').check().should('be.checked')
  expectedText.filter(option => option !== optionTocheck).forEach(unCheckedOption => {
    cy.contains(unCheckedOption).find('input').should('not.be.checked')
  });
})
Cypress.Commands.add("clickCard", (link) => {
  cy.contains('.card, [class*="projectCard"]', link).click();
});

Cypress.Commands.add("selectOption", (locator, option) => {
  cy.get(locator).select(option);
});

Cypress.Commands.add("login", (email, name) => {
  cy.get('input[type="email"]').type(email);
  cy.get('input[type="text"]').clear().type(name);
  cy.get(".mb-3 + button").click();
});
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
Cypress.Commands.add("logText", { prevSubject: true }, (subject) => {
  const text = subject.text();
  cy.log(text);
});

Cypress.Commands.add(
  "haveText",
  { prevSubject: "element" },
  (subject, expectedText) => {
    cy.wrap(subject).should("have.text", expectedText);
  }
);

Cypress.Commands.add(
  "attributeValueValidation",
  { prevSubject: "element " },
  (subject, atrr, value) => {
    cy.wrap(subject).should("have.attr", atrr, value);
  }
);
Cypress.Commands.add('attributeValueValidation', { prevSubject: "element" },(subject, attribute, expectedValue = null) => {
    if (expectedValue === null) {
      cy.wrap(subject).should("have.attr", attribute);
    } else {
      cy.wrap(subject).should("have.attr", attribute, expectedValue);
    }
  }
);

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
