import * as campaign from "../../helpers/campaign/campaign"
import { faker } from '@faker-js/faker';
import { commonPage } from "../../page/commonPage";
const commonP = new commonPage();
export function goto_campaign(){
    commonP.buttonWithContains(campaign.campaignNavBar().xpath.campaignsNav,campaign.campaignNavBar().value.campaignsNav);
    commonP.verifyURL(campaign.campaignMainPage().pageUrl)
    
    
}
export function check_visibility_campaign_main_page(){
    commonP.validateContent(campaign.campaignMainPage().pageTitleXpath,campaign.campaignMainPage().pageTitle);
    cy.wait(500)
    cy.xpath(campaign.campaignMainPage().xpath.searchBar).should("exist").and("be.visible");
    cy.xpath(campaign.campaignMainPage().xpath.createCampaignsBtn).should("exist").and("be.visible");

}
//this checks alert message if the contactform is submitted empty
export function submitEmpty_campaign(){
    commonP.buttonWithContains(campaign.campaignMainPage().xpath.createCampaignsBtn,campaign.campaignMainPage().value.createCampaignsBtn);
    cy.wait(1000)
    commonP.buttonWithContains(campaign.buttons().xpath.saveBtn,campaign.buttons().value.saveBtn)
    cy.wait(500)
    commonP.alertMessage(campaign.campaignForm().validation.campaignName.xpath,campaign.campaignForm().validation.campaignName.message)
    
}
export function campaignDetails() {
    const details={
       campaignName:faker.random.word(),
       description:faker.lorem.paragraph(),
       fundRaisingGoal:faker.datatype.number({ 'min': 500, 'max':2000}),
       followers:"QA Test"
    }
    return details

}

export function add_campaign(){
    commonP.buttonWithContains(campaign.campaignMainPage().xpath.createCampaignsBtn,campaign.campaignMainPage().value.createCampaignsBtn);
    cy.wait(3000);
    cy.xpath("//h3[normalize-space()='Create a Campaign']").should("exist").and("be.visible");
    const data =fill_campaignForm()
    commonP.buttonWithContains(campaign.buttons().xpath.saveBtn,campaign.buttons().value.saveBtn)
    cy.wait(1000)
    commonP.validateContent(campaign.campaignDetailsPage().name,data.campaignName)
    cy.writeFile('cypress/fixtures/campaign/create_campaign.json',data)

}
export function fill_campaignForm(){
    let data = campaignDetails();
    //commonP.buttonWithContains(contact.contactMainPage().xpath.addContactsBtn,contact.contactMainPage().value.addContactsBtn);
    cy.wait(1000)
    commonP.textInput(campaign.campaignForm().xpath.campaignName,data.campaignName)
    commonP.textInput(campaign.campaignForm().xpath.description,data.description)
    commonP.textInput(campaign.campaignForm().xpath.fundRaisingGoal,data.fundRaisingGoal)
    commonP.dropDownWithSearch(campaign.campaignForm().xpath.followers,data.followers)
    return data


}
export function search_campaign(){
    cy.readFile('cypress/fixtures/campaign/create_campaign.json').then((data) => {
        commonP.textInput(campaign.campaignMainPage().xpath.searchBar,data.campaignName)
        cy.wait(1000)
        
      });

}
export function select_searched(){
    cy.readFile('cypress/fixtures/campaign/create_campaign.json').then((data) => {
        const name=data.campaignName
        commonP.validateContent(campaign.campaignMainPage(name).xpath.searchedCampaign,name)
    commonP.checkBox(campaign.campaignMainPage(name).xpath.checkbox,"1")
    })
}
export function fill_editCampaignForm(){
    let data = campaignDetails();
    //commonP.buttonWithContains(contact.contactMainPage().xpath.addContactsBtn,contact.contactMainPage().value.addContactsBtn);
    cy.wait(1000)
    commonP.textInput(campaign.campaignEditForm().xpath.campaignName,data.campaignName)
    commonP.textInput(campaign.campaignEditForm().xpath.description,data.description)
    commonP.textInput(campaign.campaignEditForm().xpath.fundRaisingGoal,data.fundRaisingGoal)
    commonP.dropDownWithSearch(campaign.campaignEditForm().xpath.followers,data.followers)
    commonP.buttonWithContains(campaign.buttons().xpath.saveBtn,campaign.buttons().value.saveBtn)
    commonP.validateContent(campaign.campaignDetailsPage().name,data.campaignName)

    //NO ANY ALERTS ON EDIT SO THIS SHOULD FAIL 
    cy.writeFile('cypress/fixtures/campaign/create_campaign.json',data)


}
export function edit_campaign(){
    cy.readFile('cypress/fixtures/campaign/create_campaign.json').then((data) => {
        commonP.clickButtonForceTrue(campaign.table().xpath.campaign_name,data.campaignName)
        cy.wait(1000);
         commonP.validateContent(campaign.campaignDetailsPage().name,data.campaignName)
         commonP.clickButtonForceTrue(campaign.campaignDetailsPage().actionBtn)
         commonP.buttonWithContains(campaign.campaignDetailsPage().editBtn,"Edit Information")
         commonP.validateContent(campaign.campaignDetailsPage().dialogBoxName,"Edit Campaign")

      });
}
export function delete_contact(){
    commonP.validateVisible(campaign.delete_action().xpath.actionBtn)
    commonP.buttonWithContains(campaign.delete_action().xpath.actionBtn,campaign.delete_action().value.actionBtn)
    commonP.buttonWithContains(campaign.delete_action().xpath.deleteBtn,campaign.delete_action().value.deleteBtn);
    commonP.validateContent(campaign.delete_action().xpath.deleteDialogTitle,campaign.delete_action().value.deleteDialogTitle,);
    commonP.textInput(campaign.delete_action().xpath.deleteConfirmationField,"DELETE")
    commonP.buttonWithContains(campaign.delete_action().xpath.deleteConfirmBtn,campaign.delete_action().value.deleteConfirmBtn)
}
export function verify_delete(){
    commonP.validateContentNotExisting("//tbody/tr")//validate there's nothing when searched
}

