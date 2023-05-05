import {invalid_login} from "../../pageObject/loginObj";
describe("Login Module", () => {

    it("validLogin", () => {
      cy.Login();
    });
    it("Invalid login with valid username and invalid password ", () => {
        invalid_login(Cypress.env('dev').Cred.email,"admin@123");
      });

      it("Invalid login with invalid username and valid password ", () => {
        invalid_login("admin123@gmail.com",Cypress.env('dev').Cred.password);
      });
    
  });
  