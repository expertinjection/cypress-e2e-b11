/// <reference types="cypress"/>
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

describe("Cypress02 project", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/login");
  });

  it("Test Case 01 - Validate the login form", () => {
    loginPage.getUsername().should("be.visible").not(".required");
    loginPage.getUsernameLabel().should("have.text", "Please enter your username");
    loginPage.getPassword().should("be.visible").not(".required");
    loginPage.getPasswordLabel().should("have.text", "Please enter your password");
    loginPage.getLoginBtn().should("be.visible").and("be.enabled").and("have.text", "LOGIN");
    loginPage.getForgotPasswordLink().should("be.visible").click().should("have.text", "Forgot Password?");
  });

  it("Test Case 02 - Validate the valid login", () => {
    loginPage.userLogin("TechGlobal", "Test1234")
    loginPage.getSuccessLoginMsg().should("have.text", "You are logged in");
    loginPage.getLogoutBtn().should("be.visible").and("have.text", "LOGOUT");
  });

  it("Test Case 03 - Validate the logout", () => {
    loginPage.userLogin("TechGlobal", "Test1234")
    loginPage.getLogoutBtn().click();
    loginPage.getUsernameLabel().should("have.text", "Please enter your username");
  });

  it("Test Case 04 - Validate the Forgot Password? Link and Reset Password modal", () => {
    loginPage.getForgotPasswordLink().click();
    loginPage.getModalTitle().should("be.visible").and("have.text", "Reset Password");
    loginPage.getModalCloseBtn().should("be.visible");
    loginPage.getEmailField().should("be.visible");
    loginPage.getEmailLabel().should("have.text", "Enter your email address and we'll send you a link to reset your password. ");
    loginPage.getSubmitBtn().should("be.visible").and("not.be.disabled").and("have.text", "SUBMIT");
  });

  it("Test Case 05 - Validate the Reset Password modal close button", () => {
    loginPage.getForgotPasswordLink().click();
    loginPage.getModal().should("be.visible");
    loginPage.getModalCloseBtn().click();
    loginPage.getLoginFormTitle().should("have.text", "Login Form");
  });

  it("Test Case 06 - Validate the Reset Password form submission", () => {
    loginPage.getForgotPasswordLink().click();
    loginPage.getEmailField().type("techglobel@yahoo.com");
    loginPage.getSubmitBtn().click();
    loginPage.getConfirmationMsg()
      .should("be.visible")
      .and("have.text", "A link to reset your password has been sent to your email address.");
  });

  it("Test Case 07 - Validate the invalid login with the empty credentials", () => {
    loginPage.userLogin(" ", " ")
    loginPage.getLoginBtn().click();
    loginPage.getErrorMsg().should("have.text", "Invalid Username entered!");
  });

  it("Test Case 08 - Validate the invalid login with the wrong username", () => {
    loginPage.userLogin("John", "Test1234")
    loginPage.getLoginBtn().click();
    loginPage.getErrorMsg().should("have.text", "Invalid Username entered!");
  });

  it("Test Case 09 - Validate the invalid login with the wrong password", () => {
    loginPage.userLogin("TechGlobal", "wrongpassowrd")
    loginPage.getLoginBtn().click();
    loginPage.getErrorMsg().should("have.text", "Invalid Password entered!");
  });

  it("Test Case 10 - Validate the invalid login with the wrong username and password", () => {
    loginPage.userLogin("wronguser", "worngpass")
    loginPage.getLoginBtn().click();
    loginPage.getErrorMsg().should("have.text", "Invalid Username entered!");
  });
});
