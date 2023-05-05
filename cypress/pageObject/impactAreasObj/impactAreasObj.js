import * as impactAreas from "../../helpers/impactArea/impactArea"
import { faker } from '@faker-js/faker';
import { commonPage } from "../../page/commonPage";
import {delete_action} from "../../page/commonXpaths";
const commonP = new commonPage();
export function goto_impactAreas(){
    commonP.buttonWithContains(impactAreas.impactAreaNavBar().xpath.impactAreaNav,impactAreas.impactAreaNavBar().value.impactAreaNav);
    commonP.verifyURL(impactAreas.impactAreaMainPage().pageUrl)
    
    
}
export function check_visibility_impactAreas_main_page(){
    commonP.validateContent(impactAreas.impactAreaMainPage().pageTitleXpath,impactAreas.impactAreaMainPage().pageTitle);
    cy.wait(500)
    cy.xpath(impactAreas.impactAreaMainPage().xpath.searchBar).should("exist").and("be.visible");
    cy.xpath(impactAreas.impactAreaMainPage().xpath.newImpactAreaBtn).should("exist").and("be.visible");

}
//this checks alert message if the contactform is submitted empty
export function submitEmpty_impactArea(){
    commonP.buttonWithContains(impactAreas.impactAreaMainPage().xpath.newImpactAreaBtn,impactAreas.impactAreaMainPage().value.newImpactAreaBtn);
    cy.wait(1000)
    commonP.buttonWithContains(impactAreas.buttons().xpath.saveBtn,impactAreas.buttons().value.saveBtn)
    cy.wait(500)
    commonP.alertMessage(impactAreas.impactAreaForm().validation.impactAreaName.xpath,impactAreas.impactAreaForm().validation.impactAreaName.message)
    
}
export function impactAreaDetails() {
    const details={
       impactAreaName:faker.random.word(),
       description:faker.lorem.paragraph()
    }
    return details

}

export function add_impactArea(){
    commonP.buttonWithContains(impactAreas.impactAreaMainPage().xpath.newImpactAreaBtn,impactAreas.impactAreaMainPage().value.newImpactAreaBtn);
    cy.wait(3000);
    cy.xpath("//h3[normalize-space()='Create an Impact Area']").should("exist").and("be.visible");
    const data =fill_impactAreaForm()
    commonP.buttonWithContains(impactAreas.buttons().xpath.saveBtn,impactAreas.buttons().value.saveBtn)
    cy.wait(1000)
    cy.writeFile('cypress/fixtures/impactAreas/create_impactAreas.json',data)

}
export function fill_impactAreaForm(){
    let data = impactAreaDetails();
    //commonP.buttonWithContains(contact.contactMainPage().xpath.addContactsBtn,contact.contactMainPage().value.addContactsBtn);
    cy.wait(1000)
    commonP.textInput(impactAreas.impactAreaForm().xpath.impactAreaName,data.impactAreaName)
    commonP.textInput(impactAreas.impactAreaForm().xpath.description,data.description)
    return data


}
export function search_impactArea(){
    cy.readFile('cypress/fixtures/impactAreas/create_impactAreas.json').then((data) => {
        commonP.textInput(impactAreas.impactAreaMainPage().xpath.searchBar,data.impactAreaName)
        cy.wait(1000)
        
      });

}
export function select_searched(){
    cy.readFile('cypress/fixtures/impactAreas/create_impactAreas.json').then((data) => {
        const name=data.impactAreaName
        commonP.validateContent(impactAreas.impactAreaMainPage(name).xpath.searchedImpactArea,name)
    commonP.checkBox(impactAreas.impactAreaMainPage(name).xpath.checkbox,"1")
    })
}
export function fill_editContactForm(){
    let data = impactAreaDetails();
    //commonP.buttonWithContains(contact.contactMainPage().xpath.addContactsBtn,contact.contactMainPage().value.addContactsBtn);
    cy.wait(1000)
    commonP.textInput(impactAreas.impactAreaEditForm().xpath.impactAreaName,data.impactAreaName)
    commonP.textInput(impactAreas.impactAreaEditForm().xpath.description,data.description)
    commonP.buttonWithContains(impactAreas.buttons().xpath.saveBtn,impactAreas.buttons().value.saveBtn)

    //NO ANY ALERTS ON EDIT SO THIS SHOULD FAIL 
    cy.writeFile('cypress/fixtures/impactAreas/create_impactAreas.json',data)


}
export function edit_impactArea(){
    cy.readFile('cypress/fixtures/impactAreas/create_impactAreas.json').then((data) => {
        commonP.clickButtonForceTrue(impactAreas.table().xpath.impactArea_name,data.impactAreaName)
        cy.wait(1000);
         commonP.validateContent(impactAreas.impactAreaDetailsPage().name,data.impactAreaName)
         commonP.clickButtonForceTrue(impactAreas.impactAreaDetailsPage().menuButton,impactAreas)
         commonP.buttonWithContains(impactAreas.impactAreaDetailsPage().editBtn,"Edit Information")
      });
}
export function delete_contact(){
    commonP.validateVisible(impactAreas.delete_action().xpath.actionBtn)
    commonP.buttonWithContains(impactAreas.delete_action().xpath.actionBtn,impactAreas.delete_action().value.actionBtn)
    commonP.buttonWithContains(impactAreas.delete_action().xpath.deleteBtn,impactAreas.delete_action().value.deleteBtn);
    commonP.validateContent(impactAreas.delete_action().xpath.deleteDialogTitle,impactAreas.delete_action().value.deleteDialogTitle,);
    commonP.textInput(impactAreas.delete_action().xpath.deleteConfirmationField,"DELETE")
    commonP.buttonWithContains(impactAreas.delete_action().xpath.deleteConfirmBtn,impactAreas.delete_action().value.deleteConfirmBtn)
}
export function verify_delete(){
    commonP.validateContentNotExisting("//tbody/tr")//validate there's nothing when searched
}

