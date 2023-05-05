import {loginForm} from "../helpers/login/login";
import { commonPage } from "../page/commonPage";
const commonP = new commonPage();

export function Login(email,password){
    cy.session([email, password], () => {
        cy.visit(Cypress.env('dev').url,{ timeout: 90000 })
        cy.url().should("include",Cypress.env('dev').url);
        cy.xpath(loginForm().xpath.email).should("exist").and("be.visible");//checking if the email field exists in the DOM and is visible
        commonP.textInput(loginForm().xpath.email,email);
        cy.xpath(loginForm().xpath.password).should("exist").and("be.visible");
        commonP.textInput(loginForm().xpath.password,password);
        commonP.buttonWithContains(loginForm().xpath.loginBtn,loginForm().value.loginBtn);
});
    cy.visit(Cypress.env('dev').url,{ timeout: 90000 })
    cy.wait(3000)
    cy.xpath("//ul[@class='nav-main']/li").should("contain","Dashboard")//verify successful login if dashboard is found in the navbar

}
export function valid_login(email,password){
        cy.visit(Cypress.env('dev').url)
        cy.url().should("include",Cypress.env('dev').url);
        cy.xpath(loginForm().xpath.email).should("exist").and("be.visible");//checking if the email field exists in the DOM and is visible
        commonP.textInput(loginForm().xpath.email,email);
        cy.xpath(loginForm().xpath.password).should("exist").and("be.visible");
        commonP.textInput(loginForm().xpath.password,password);
        commonP.buttonWithContains(loginForm().xpath.loginBtn,loginForm().value.loginBtn);
        cy.xpath("//ul[@class='nav-main']/li").should("contain","Dashboard")

}
export function invalid_login(email,password){
    cy.visit(Cypress.env('dev').url)
    cy.xpath(loginForm().xpath.email).should("exist").and("be.visible");//checking if the password field exists in the DOM and is visible
    commonP.textInput(loginForm().xpath.email,email);
    cy.xpath(loginForm().xpath.password).should("exist").and("be.visible");
    commonP.textInput(loginForm().xpath.password,password);
    commonP.buttonWithContains(loginForm().xpath.loginBtn,loginForm().value.loginBtn);
    commonP.alertMessage(loginForm().xpath.invalidAlert,loginForm().value.invalidAlert)//checks for invalid message after email and pwd invalid


}