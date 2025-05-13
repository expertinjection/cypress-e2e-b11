import BasePage from "./BasePage";

class LoginPage extends BasePage {
  /* Locators */
  getUsername() {
    return cy.get("#username");
  }
  getUsernameLabel() {
    return cy.get('[for="username"]');
  }

  getPassword() {
    return cy.get("#password");
  }
  getPasswordLabel() {
    return cy.get('[for="password"]');
  }

  getLoginBtn() {
    return cy.get("#login_btn");
  }

  getSuccessLoginMsg() {
    return cy.get("#success_lgn");
  }
  getForgotPasswordLink() {
    return cy.get('a[href="/frontend/login"]');
  }

  getErrorMsg() {
    return cy.get("#error_message");
  }

  /* Methods */
  clickLoginButton() {
    this.getLoginBtn().click();
  }

  /**
   * This methods can be used to login in LoginPage
   *
   * @param {string} username
   * @param {string} password
   *
   * @example
   * userLogin('Tech', 'Global')
   */
  userLogin(username, password) {
    this.getUsername().type(username);
    this.getPassword().type(password);
    this.clickLoginButton();
  }
  getLogoutBtn() {
    return cy.get("#logout");
  }

  getModalTitle() {
    return cy.get("#modal_title");
  }

  getModalCloseBtn() {
    return cy.get('button[aria-label="close"]');
  }

  getEmailField() {
    return cy.get("#email");
  }

  getEmailLabel() {
    return cy.get('label[for="email"]');
  }

  getSubmitBtn() {
    return cy.get("#submit");
  }

  getConfirmationMsg() {
    return cy.get("#confirmation_message");
  }
  getLoginFormTitle() {
    return cy.get('h1[class="is-size-3"]');
  }

  getModal() {
    return cy.get(".modal-card");
  }
}

export default LoginPage;
