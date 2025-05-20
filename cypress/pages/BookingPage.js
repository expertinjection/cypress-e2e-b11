class BookingPage {
    //locators
    gettripType(type) {
      if (type === "One way") {
        return cy.get('input[value="One way"]');
      } else {
        return cy.get('input[value="Round trip"]');
      }
    }
  
    getLabelsText() {
      return cy.get('div[class="field"]>.label');
    }
  
    getDateLocater() {
      return cy.get('input[placeholder="MM/DD/YY"]');
    }
  
    getPassengersCount() {
      return cy.get('select:eq(3)');
    }
  
    getPassengersType() {
      return cy.get('select:eq(4)');
    }
    getPassengerType2() {
        return cy.get('select:eq(5)')
    }
  
    getBookButton() {
      return cy.get('.Button_c_button__TmkRS');
    }
  
    getCabinClass() {
      return cy.get('select:eq(0)');
    }
  
    getFromLocation() {
      return cy.get('select:eq(1)');
    }
  
    getTOlocation() {
      return cy.get('select:eq(2)');
    }
    getDepatrueDate(){
        return cy.get('.ml-3').find('p').eq(0)
    }
    getReturnDate(){
        return cy.get('.ml-3').find('p').eq(1)
    }
    getDepartHeader(){
        return cy.get('.ml-3').find('h1').eq(0)
    }
    getReturnHeader(){
        return cy.get('.ml-3').find('h1').eq(1)
    }
    getFromTodes(){
        return cy.get('.ml-3').find('h3').eq(0)
    }
    getFromToReturnDes(){
        return cy.get('.ml-3').find('h3').eq(1)
    }
  
    // methods
    selectTriptype(type) {
      this.gettripType(type).check({ force: true });
    }
  
    selectPassengersCount(count) {
      this.getPassengersCount().select(count.toString());
    }
  
    selectCabinClass(cabinClass) {
      this.getCabinClass().select(cabinClass);
    }
  
    selectLocation(from, to) {
      this.getFromLocation().select(from);
      this.getTOlocation().select(to);
    }
  
    selectDate(departDate, returnDate = null) {
      this.getDateLocater().eq(0).clear().type(departDate);
      if (returnDate) {
        this.getDateLocater().eq(1).clear().type(returnDate);
      }
    }
  
    selectPassengers(passengerType, passengerCount) {
      this.getPassengersType().select(passengerType);
      this.selectPassengersCount(passengerCount);
    }
  
    clickBookingButton() {
      this.getBookButton().click();
    }
    validateDefulatvalus () {
        const labels = [
            "Cabin Class",
            "From",
            "To",
            "Depart",
            "Return",
            "Number of passengers",
            "Passenger 1"
          ]
          cy.get('div[class="field"]>.label').each((el, index) => {
            cy.wrap(el).should("be.visible").and("have.text", labels[index]);
          });
    }
  }
  
  export default BookingPage;
  
  
  