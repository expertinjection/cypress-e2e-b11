/// <reference types="cypress"/>
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

describe("Cypress03 project", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/booking");
  });
  it("Test Case 01 - Validate the default Book your trip form", () => {
    cy.get('input[value="One way"]')
      .should("be.visible")
      .and("be.enabled")
      .and("have.attr", "checked");
    cy.get('input[value="Round trip"]')
      .should("be.visible")
      .and("be.enabled")
      .and("not.have.attr", "checked");
    const data = [
      "Cabin Class",
      "From",
      "To",
      "Depart",
      "Return",
      "Number of passengers",
      "Passenger 1"
    ];
    cy.get('div[class="field"]>.label').each((el, index) => {
      cy.wrap(el).should("be.visible").and("have.text", data[index]);
    });
    cy.get('div[class="field"]>.select').each((el) => {
      cy.wrap(el).should("be.visible");
    });
    cy.get('input[placeholder="MM/DD/YY"]').realClick();
    cy.get('div[class="react-datepicker__month-container"]').should(
      "be.visible"
    );
    cy.contains("Return")
      .parent()
      .find('input[placeholder="MM/DD/YY"]')
      .should("be.visible")
      .and("have.attr", "disabled");
    cy.contains("Number of passengers")
      .parent()
      .find('option[value="1"]')
      .should("have.value", "1");
    cy.contains("Passenger 1")
      .parent()
      .find("option")
      .should("have.value", "Adult (16-64)");
    cy.get('button[class="Button_c_button__TmkRS null"]')
      .should("be.visible")
      .and("be.enabled");
  });
  it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
    cy.get('input[value="Round trip"]').check().should("be.checked");
    cy.get('input[value="One way"]').should("not.be.checked");
    const data = [
      "Cabin Class",
      "From",
      "To",
      "Depart",
      "Return",
      "Number of passengers",
      "Passenger 1"
    ];

    cy.get('div[class="field"]>.label').each((el, index) => {
      cy.wrap(el).should("be.visible").and("have.text", data[index]);
    });

    cy.get('div[class="field"]>.select').each((el) => {
      cy.wrap(el).should("be.visible");
    });
    cy.get('input[placeholder="MM/DD/YY"]')
      .first()
      .should("be.visible")
      .and("not.be.disabled");
    cy.contains("Return")
      .parent()
      .find('input[placeholder="MM/DD/YY"]')
      .should("be.visible")
      .and("not.be.disabled");
    cy.contains("Number of passengers")
      .parent()
      .find("select")
      .should("have.value", "1");

    cy.contains("Passenger 1")
      .parent()
      .find("select")
      .should("have.value", "Adult (16-64)");

    cy.get('button[class="Button_c_button__TmkRS null"]')
      .should("be.visible")
      .and("be.enabled");
  });
  it('Test Case 03 - Validate the booking for 1 passenger and one way', () =>{
    
  })
});
