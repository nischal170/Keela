import * as contact from "../../helpers/contact/contact"
import { faker } from '@faker-js/faker';
import { commonPage } from "../../page/commonPage";
const commonP = new commonPage();
export function goto_contact(){
    commonP.buttonWithContains(contact.contactNavBar().xpath.contactsNav,contact.contactNavBar().value.contactsNav);//navigation through nav bar
    commonP.verifyURL(contact.contactMainPage().pageUrl)//url validation
    
    
}
export function check_visibility_contact_main_page(){
    commonP.validateContent(contact.contactMainPage().pageTitleXpath,contact.contactMainPage().pageTitle);// page Title validation
    cy.wait(500)
    cy.xpath(contact.contactMainPage().xpath.searchBar).should("exist").and("be.visible"); //search bar visibility validation
    cy.xpath(contact.contactMainPage().xpath.addContactsBtn).should("exist").and("be.visible");//button visibility validation

}
//this checks alert message if the contact form can be submitted empty.
export function submitEmpty_contact(){
    commonP.buttonWithContains(contact.contactMainPage().xpath.addContactsBtn,contact.contactMainPage().value.addContactsBtn);
    cy.wait(1000)
    commonP.buttonWithContains(contact.buttons().xpath.saveBtn,contact.buttons().value.saveBtn)
    commonP.alertMessage(contact.alertMessage().xpath.emptyField,contact.alertMessage().value.emptyField)// alert message validation
    
}
export function contactDetails() {
    //creating a object to store all the faker datas
    const details={
        firstName:faker.name.firstName(),
        middleName:faker.name.middleName(),
        lastName:faker.name.lastName(),
        email:faker.internet.email(),
        emailSubStatus:"Opted In",//select option
        phone:faker.phone.number('+97798########'),
        bYear:faker.datatype.number({ 'min': 1920, 'max':2000}),//select option
        bMonth:faker.datatype.number({ 'min': 0, 'max': 11}),//select option
        bDay:faker.datatype.number({ 'min': 1, 'max': 28 }),//select option
        addressLine1:faker.address.streetName(),
        addressLine2:faker.address.streetAddress(),
        country:faker.address.country(),
        city:faker.address.streetAddress(),
        provinceState:faker.address.state(),
        postalZip:faker.address.zipCode(),
        company:"Cure Centre",//select option
        companyRole:"Organization",//select option
        household:"Transport",//select option
        asignee:"QA Parichyak",//select option
        priority:"Low",//select option
        tags:"Non Profit"//select option
    }
    return details

}

export function add_contact(){
    commonP.buttonWithContains(contact.contactMainPage().xpath.addContactsBtn,contact.contactMainPage().value.addContactsBtn);
    cy.wait(3000);
    cy.xpath("//h3[normalize-space()='Create a new contact']").should("exist").and("be.visible");//form title visibility validation
    const data =fill_contactForm()
    commonP.buttonWithContains(contact.buttons().xpath.saveBtn,contact.buttons().value.saveBtn)
    cy.wait(1000)
    commonP.verifyURL(contact.contactDetailsPage().pageUrl) // contact details pageUrl validation 
    commonP.validateContent(contact.contactDetailsPage().personalInfo,"Personal Info");//validate if the contact is created and is on the contact details page
    cy.writeFile('cypress/fixtures/contacts/create/create_contact.json',data)//only after validaton write the data to a file

}
export function fill_contactForm(){
    let data = contactDetails();
    //commonP.buttonWithContains(contact.contactMainPage().xpath.addContactsBtn,contact.contactMainPage().value.addContactsBtn);
    cy.wait(1000)
    commonP.textInput(contact.contactForm().xpath.fName,data.firstName)
    commonP.textInput(contact.contactForm().xpath.mName,data.middleName)
    commonP.textInput(contact.contactForm().xpath.lName,data.lastName)
    commonP.textInput(contact.contactForm().xpath.eMail,data.email)
    commonP.dropdownSelector(contact.contactForm().xpath.emailSubStats,data.emailSubStatus)

    commonP.textInput(contact.contactForm().xpath.phone,data.phone)

    commonP.dropdownSelector(contact.contactForm().xpath.bYear,data.bYear)
    commonP.dropdownSelector(contact.contactForm().xpath.bMonth,data.bMonth)
    commonP.dropdownSelector(contact.contactForm().xpath.bDay,data.bDay)

    commonP.textInput(contact.contactForm().xpath.addressLine1,data.addressLine1)
    commonP.textInput(contact.contactForm().xpath.addressLine2,data.addressLine2)
    commonP.textInput(contact.contactForm().xpath.country,data.country)
    commonP.textInput(contact.contactForm().xpath.city,data.city)
    commonP.textInput(contact.contactForm().xpath.stateProvince,data.provinceState)
    commonP.textInput(contact.contactForm().xpath.postalCode,data.postalZip)

    commonP.dropDownWithSearch(contact.contactForm().xpath.company,data.company)
    commonP.textInput(contact.contactForm().xpath.companyRole,data.companyRole)
    commonP.textInput(contact.contactForm().xpath.household,data.household)
    commonP.dropDownWithSearch(contact.contactForm().xpath.assignee,data.asignee)
    commonP.dropdownSelector(contact.contactForm().xpath.priority,data.priority)
    commonP.dropDownWithSearch(contact.contactForm().xpath.tags,data.tags)
    return data


}
export function search_contact(){
    cy.readFile('cypress/fixtures/contacts/create/create_contact.json').then((data) => {
        commonP.textInput(contact.contactMainPage().xpath.searchBar,data.firstName+" "+data.lastName)
        cy.wait(1000)
        
      });

}
export function select_searched(){
    cy.readFile('cypress/fixtures/contacts/create/create_contact.json').then((data) => {
        const fullName=data.firstName+" "+data.middleName+" "+data.lastName
        commonP.validateContent(contact.contactMainPage(fullName).xpath.searchedName,fullName)
    commonP.checkBox(contact.contactMainPage(fullName).xpath.checkbox,"1")
    })
}
export function fill_editContactForm(){
    let data=contactDetails();
    cy.wait(1000)
    commonP.textInput(contact.editDiaglog().xpath.fName,data.firstName)
    commonP.textInput(contact.editDiaglog().xpath.mName,data.middleName)
    commonP.textInput(contact.editDiaglog().xpath.lName,data.lastName)
    commonP.textInput(contact.editDiaglog().xpath.eMail,data.email)
    cy.wait(500)
    commonP.buttonWithContains(contact.buttons().xpath.editSave,contact.buttons().value.editSave)
    commonP.alertMessage(contact.editDiaglog().xpath.notification,contact.editDiaglog().value.notification)//validate edit alert message
    commonP.validateContent(contact.contactDetailsPage().name,data.firstName+" "+data.middleName+" "+data.lastName)

    cy.writeFile('cypress/fixtures/contacts/create/create_contact.json',data)

}
export function edit_contact(){
    cy.readFile('cypress/fixtures/contacts/create/create_contact.json').then((data) => {
        commonP.clickButtonForceTrue(contact.table().xpath.contact_name,data.firstName+" "+data.lastName)
        cy.wait(1000);
        commonP.validateContent(contact.contactDetailsPage().name,data.firstName+" "+data.middleName+" "+data.lastName)
        commonP.buttonWithContains(contact.buttons().xpath.edit,contact.buttons().value.edit)

        
      });
}
export function delete_contact(){
    commonP.validateElementIsVisible(contact.delete_action().xpath.actionBtn)
    commonP.buttonWithContains(contact.delete_action().xpath.actionBtn,contact.delete_action().value.actionBtn)
    commonP.buttonWithContains(contact.delete_action().xpath.deleteBtn,contact.delete_action().value.deleteBtn);
    commonP.validateContent(contact.delete_action().xpath.deleteDialogTitle,contact.delete_action().value.deleteDialogTitle,);
    commonP.textInput(contact.delete_action().xpath.deleteConfirmationField,"DELETE")
    commonP.buttonWithContains(contact.delete_action().xpath.deleteConfirmBtn,contact.delete_action().value.deleteConfirmBtn)
}
export function verify_delete(){
    cy.readFile('cypress/fixtures/contacts/create/create_contact.json').then((data) => {
        const fullName=data.firstName+" "+data.middleName+" "+data.lastName
    search_contact()
    commonP.validateContentNotExisting("//tbody/tr")//validate there's empty table  when deleted data is searched
    })
    

}

