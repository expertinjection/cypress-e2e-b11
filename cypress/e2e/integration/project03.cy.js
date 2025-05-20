/// <reference types="cypress"/>
import BookingPage from "../../pages/BookingPage";
const bookingpage = new BookingPage
describe("Cypress03 project", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend/booking");
    });
    it("Test Case 01 - Validate the default Book your trip form", () => {
        bookingpage.gettripType('One way').should('be.visible').and('be.enabled').and('be.checked')
        bookingpage.gettripType('Round trip').should('be.visible').and('be.enabled').and('not.be.checked')
        bookingpage.validateDefulatvalus()
        bookingpage.getBookButton().should('be.visible').and('be.enabled')
    });
    it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
        bookingpage.gettripType('Round trip').realClick().should('be.checked')
        bookingpage.gettripType('One way').should('not.be.checked')
        bookingpage.validateDefulatvalus()
        bookingpage.getBookButton().should('be.visible').and('be.enabled')
    });
    it('Test Case 03 - Validate the booking for 1 passenger and one way', () =>{
        bookingpage.gettripType('One way').realClick()
        bookingpage.selectCabinClass('Business')
        bookingpage.selectLocation('Illinois', 'Florida')
        bookingpage.selectDate('Tue May 27 2025')
        //bookingpage.selectPassengersCount(1)
        bookingpage.selectPassengers('Senior (65+)', 1)
        bookingpage.getBookButton().realClick()
        bookingpage.getDepartHeader().should('have.text', 'DEPART')
        bookingpage.getFromTodes().should('have.text', 'IL to FL')
        bookingpage.getDepatrueDate().should('have.text', 'Tue May 27 2025')
        bookingpage.getPassengersCount().should('contain','1')
        bookingpage.getPassengersType().should('contain', 'Senior (65+)')
        bookingpage.getCabinClass().should('contain', 'Business')

        

    });
    it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {
        bookingpage.gettripType('Round trip').realClick()
        bookingpage.selectCabinClass('First')
        bookingpage.selectLocation('California', 'Illinois')
        bookingpage.selectDate('Tue May 27 2025', 'Fri Jun 27 2025')
        //bookingpage.selectPassengersCount(1)
        bookingpage.selectPassengers('Adult (16-64)', 1)
        bookingpage.getBookButton().realClick()
        bookingpage.getDepartHeader().should('have.text', 'DEPART')
        bookingpage.getReturnHeader().should('have.text', 'RETURN')
        bookingpage.getFromTodes().should('have.text', 'CA to IL')
        bookingpage.getFromToReturnDes().should('have.text', 'IL to CA')
        bookingpage.getDepatrueDate().should('have.text', 'Tue May 27 2025')
        bookingpage.getReturnDate().should('have.text', 'Fri Jun 27 2025')
        bookingpage.getPassengersCount().should('contain','1')
        bookingpage.getPassengersType().should('contain', 'Adult (16-64)')
        bookingpage.getCabinClass().should('contain', 'First')
    })
    it('Test Case 05 - Validate the booking for 2 passengers and one way', () => {
        bookingpage.gettripType('One way').realClick()
        bookingpage.selectCabinClass('Premium Economy')
        bookingpage.selectLocation('New York', 'Texas')
        bookingpage.selectDate('Wed May 21 2025')
        bookingpage.selectPassengersCount(2)
        bookingpage.getPassengersType().type('Adult (16-64)')
        bookingpage.getPassengerType2().type('Child (2-11)')
        bookingpage.getBookButton().realClick()
        bookingpage.getDepartHeader().should('have.text', 'DEPART')
        bookingpage.getFromTodes().should('have.text', 'NY to TX')
        bookingpage.getDepatrueDate().should('have.text', 'Wed May 21 2025')
        bookingpage.getPassengersCount().should('contain','2')
        bookingpage.getPassengersType().should('contain', 'Adult (16-64)', 'Child (2-11)')
        bookingpage.getCabinClass().should('contain', 'Premium Economy')
    })
  })
  