import login from "../pages/loginModal.json";

describe("Login", () => {
  it("Attempt to login with empty fields", () => {
    cy.visit("loginUrl");
    cy.get(login.loginButton).click();
  });

  it("Attempt to login with empty password field", () => {
    cy.visit("loginUrl");
    cy.get(login.emailAdressInputField).type("obree@gmail.com");
    cy.get(login.loginButton).click();
  });

  it("Attempt to login with empty email field", () => {
    cy.visit("loginUrl");
    cy.get(login.passwordInputField).type("23234324");
    cy.get(login.loginButton).click();
  });

  it("Attempt to login with wrong password", () => {
    cy.visit("loginUrl");
    cy.get(login.emailAdressInputField).type("obree@gmail.com");
    cy.get(login.passwordInputField).type("asdf2");
    cy.get(login.loginButton).click();
  });

  it("Attempt to login with wrong email", () => {
    cy.visit("baseUrl");
    cy.get(login.emailAdressInputField).type("obree1@gmail.com");
    cy.get(login.passwordInputField).type("asdafds22");
    cy.get(login.loginButton).click();
  });

  it("Back to Home page", () => {
    cy.visit("loginUrl");
    cy.get(login.backToHomeLink).click();
  });

  it("Navigate to sign up", () => {
    cy.visit("loginUrl");
    cy.get(login.backToHomeLink).click();
  });

  it("Successfull log in", () => {
    cy.visit("loginUrl");
    cy.get(login.emailAdressInputField).type("consulteerqa@gmail.com");
    cy.get(login.passwordInputField).type("User12345.");
    cy.get(login.loginButton).click();
  });
});