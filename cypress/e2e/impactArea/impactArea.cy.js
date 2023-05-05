import * as impactAreas_module from "../../pageObject/impactAreasObj/impactAreasObj";

describe("Impact Areas  Module", () => {
    beforeEach(() => {
        cy.Login();
        cy.wait(1000);
        impactAreas_module.goto_impactAreas();
        cy.wait(1000);
        impactAreas_module.check_visibility_impactAreas_main_page();

    })
    it("verify if empty form cannot be submitted", () => {
        impactAreas_module.submitEmpty_impactArea();

    });
     it("Create Impact Areas", () => {
        impactAreas_module.add_impactArea();
     });

     it("Edit Impact Areas", () => {
        impactAreas_module.search_impactArea()
        impactAreas_module.edit_impactArea()
        impactAreas_module.fill_editContactForm()
         });
   

      it("Delete Impact Areas", () => {
        impactAreas_module.search_impactArea()
        impactAreas_module.select_searched();
        impactAreas_module.delete_contact();
        impactAreas_module.verify_delete();
        
      });
    
  });
  