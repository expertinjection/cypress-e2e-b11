import BasePage from './BasePage'

class TablesPage extends BasePage {
    getTableHeaders() {
    return cy.get('.header')
  }
}

export default TablesPage