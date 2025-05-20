/// <reference types="cypress"/>
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
    cy.get('input[value="One way"]').check()
    cy.get('select').eq(0).select('Business')
    cy.get('select').eq(1).select('Illinois')
    cy.get('select').eq(2).select('Florida')
    cy.get('input[placeholder="MM/DD/YY"]').eq(0).realClick()
    cy.get('.react-datepicker-ignore-onclickoutside')
    cy.get('div[aria-label="Choose Tuesday, May 27th, 2025"]').realClick()
    cy.get('select').eq(3).select('1')
    cy.get('select').eq(4).select('Senior (65+)')
    cy.get('.Button_c_button__TmkRS').click()

    cy.get('.ml-3').find('h1').should('contain', 'DEPART');
    cy.get('.ml-3').find('h3').eq(0).should('contain', 'IL to FL'); 
    cy.get('.ml-3').find('p').eq(0).should('contain', 'Tue May 27 2025');
    cy.get('.ml-3').find('p').eq(1).should('contain', 'Number of Passengers: 1');
    cy.get('.ml-3').find('p').eq(2).should('contain', 'Passenger 1: Senior (65+)');
    cy.get('.ml-3').find('p').eq(3).should('contain', 'Cabin class: Business');

  });
  it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {
    cy.get('input[value="Round trip"]').check()
    cy.get('select').eq(0).select('First')
    cy.get('select').eq(1).select('California')
    cy.get('select').eq(2).select('Illinois')
    cy.get('input[placeholder="MM/DD/YY"]').eq(0).realClick()
    cy.get('.react-datepicker-ignore-onclickoutside')
    cy.get('div[aria-label="Choose Tuesday, May 27th, 2025"]').realClick()
    cy.get('input[placeholder="MM/DD/YY"]').eq(1).realClick()
    cy.get('button[aria-label="Next Month"]').realClick()
    cy.get('div[aria-label="Choose Friday, June 27th, 2025"]').realClick()
    cy.get('select').eq(3).select('1')
    cy.get('select').eq(4).select('Adult (16-64)')
    cy.get('.Button_c_button__TmkRS').click()

    cy.get('.ml-3').find('h1').eq(0).should('contain', 'DEPART');
    cy.get('.ml-3').find('h1').eq(1).should('contain', 'RETURN');
    cy.get('.ml-3').find('h3').eq(0).should('contain', 'CA to IL'); 
    cy.get('.ml-3').find('h3').eq(1).should('contain', 'IL to CA'); 

    cy.get('.ml-3').find('p').eq(0).should('contain', 'Tue May 27 2025');
    cy.get('.ml-3').find('p').eq(1).should('contain', 'Fri Jun 27 2025');
    cy.get('.ml-3').find('p').eq(2).should('contain', 'Number of Passengers: 1');
    cy.get('.ml-3').find('p').eq(3).should('contain', 'Passenger 1: Adult (16-64)');
    cy.get('.ml-3').find('p').eq(4).should('contain', 'Cabin class: First');
  })
  it('Test Case 05 - Validate the booking for 2 passengers and one way', () => {
    cy.get('input[value="One way"]').check()
    cy.get('select').eq(0).select('Premium Economy')
    cy.get('select').eq(1).select('New York')
    cy.get('select').eq(2).select('Texas')
    cy.get('input[placeholder="MM/DD/YY"]').eq(0).realClick()
    cy.get('.react-datepicker-ignore-onclickoutside')
    cy.get('div[aria-label="Choose Wednesday, May 21st, 2025"]').realClick()
    cy.get('select').eq(3).select('2')
    cy.get('select').eq(4).select('Adult (16-64)')
    cy.get('select').eq(5).select('Child (2-11)')
    cy.get('.Button_c_button__TmkRS').click()

    cy.get('.ml-3').find('h1').should('contain', 'DEPART');
    cy.get('.ml-3').find('h3').eq(0).should('contain', 'NY to TX'); 
    cy.get('.ml-3').find('p').eq(0).should('contain', 'Wed May 21 2025');
    cy.get('.ml-3').find('p').eq(1).should('contain', 'Number of Passengers: 2');
    cy.get('.ml-3').find('p').eq(2).should('contain', 'Passenger 1: Adult (16-64)');
    cy.get('.ml-3').find('p').eq(3).should('contain', 'Passenger 2: Child (2-11)');
    cy.get('.ml-3').find('p').eq(4).should('contain', 'Cabin class: Premium Economy');
  })
})
