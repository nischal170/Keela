import * as campaign_module from "../../pageObject/campaignObj/campaignObj";

describe("Campaign  Module", () => {
    beforeEach(() => {
        cy.Login();
        cy.wait(1000);
        campaign_module.goto_campaign();
        cy.wait(1000);
        campaign_module.check_visibility_campaign_main_page();

    })
    it("verify if empty form cannot be submitted", () => {
        campaign_module.submitEmpty_campaign();

    });
     it("Create Campaign", () => {
        campaign_module.add_campaign();
     });

     it("Edit Campaign", () => {
        campaign_module.search_campaign()
        campaign_module.edit_campaign()
        campaign_module.fill_editCampaignForm()
         });
   

      it("Delete Campaign", () => {
        campaign_module.search_campaign()
        campaign_module.select_searched();
        campaign_module.delete_contact();
        campaign_module.verify_delete();
        
      });
    
  });
  