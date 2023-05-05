import * as contacts_module from "../../pageObject/contactObj/contactObj";

describe("Contacts  Module", () => {
    beforeEach(() => {
        cy.Login();
        cy.wait(1000);
        contacts_module.goto_contact();
        cy.wait(1000);
        contacts_module.check_visibility_contact_main_page();

    })
    it("verify if empty form cannot be submitted", () => {
        contacts_module.submitEmpty_contact();

    });
     it("Create A contact", () => {
    contacts_module.add_contact();
     });

     it("Edit A contact", () => {
        contacts_module.search_contact()
        contacts_module.edit_contact()
        contacts_module.fill_editContactForm()
         });
   

      it("Delete A contact", () => {
        contacts_module.search_contact();
        contacts_module.select_searched();
        contacts_module.delete_contact();
        contacts_module.verify_delete();
        
      });
    
  });
  