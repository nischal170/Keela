
export class commonPage {
    textInput(path, value) {
      cy.xpath(path)
        .clear({ force: true })
        .type(value)
        .should("have.value", value)
        .wait(1000);
    }
    dropDownWithSearch(path, value) {
      cy.xpath(path)
        .clear({ force: true })
        .type(value,{force:true})
        .should("have.value", value).wait(1500)
        .type('{enter}').wait(1000);
    }
  
    buttonWithContains(xpath, value) {
      cy.xpath(xpath, { setTimeout: 6000 })
        .contains(value)
        .click({ force: true })
        .wait(1000);
    }
  
    clickButton(path) {
      cy.xpath(path).click().wait(500);
    }
  
    clickButtonForceTrue(path) {
      cy.xpath(path).click({
        force: true,
      });
    }
  
    clickRadioBtn(path) {
      cy.xpath(path).should("exist").check({ force: true }).should("be.checked");
    }
    checkBox(path) {
        cy.xpath(path)
          .check({ force: true })
          .wait(1000);
      
    }
  
    verfiyCheckedRadioButton(path) {
      cy.xpath(path).should("exist").should("be.checked");
    }
  
    validationMessage(path, message) {
      cy.xpath(path).should("exist").should("contain", message).and("be.visible");
    }
  
    dropdownSelector(path, value) {
      cy.xpath(path).wait(500).select(`${value}`,{force:true}).should("have.value",`${value}`);
    }
  
    dropdownSelectorForceTrue(path, value) {
      cy.xpath(path)
        .wait(500)
        .select(value, { force: true })
        .should("have.value", value);
    }
  
    alertMessage(path, message) {
      cy.xpath(path).should("exist").should("contain", message);
    }
    clickText(message) {
      cy.xpath(`//span[contains(text(),'${message}')]`).should("exist").click();
    }
    searchCondition(path, value) {
      cy.xpath(path)
        .clear({
          force: true,
        })
        .type(value)
        .should("have.value", value);
    }
  
    verifyTableValue(num, text) {
      cy.xpath(`//tr[${num}]//td[text()='${text}']`)
        .should("exist")
        .should("be.visible");
    }
  
    //to validate content anywhere by passing xpath and value
    validateContent(xpath, value) {
      cy.xpath(xpath)
        .should("exist")
        .should("contain.text", value)
        .and("be.visible");
    }
  
    //to validate content not matching anywhere by passing xpath and value
    validateContentNotMatching(xpath, value) {
      cy.xpath(xpath).should("not.exist").should("not.contain.text", value);
    }
    validateContentNotExisting(xpath){
      cy.xpath(xpath).should("not.exist")
    }
  
    //to validate element visibility anywhere by passing xpath and state
    validateElementVisibility(xpath, state) {
      cy.xpath(xpath).should(state);
    }
  
    //to validate element is visible anywhere by passing xpath
    validateElementIsVisible(xpath) {
      cy.xpath(xpath).scrollIntoView().should("exist").and("be.visible");
    }
    validateVisible(xpath) {
      cy.xpath(xpath).should("exist").and("be.visible");
    }
    
  
    //to validate element is not visible anywhere by passing xpath
    validateElementIsNotVisible(xpath) {
      cy.xpath(xpath).should("exist").and("not.be.visible");
    }
  
    validateElementAttribute(xpath, attribute, value) {
      cy.xpath(xpath).should("exist").should("have.attr", attribute, value);
    }
  
    verifyDialogBoxVisibility(xpath, state) {
      cy.xpath(xpath).should("exist").should(state);
    }
  
    clearTextInput(path) {
      cy.xpath(path).should("exist").clear({ force: true });
    }
  
    clickButtonWithText(path, option) {
      cy.xpath(path)
        .should("exist")
        .contains(option)
        .should("be.visible")
        .click({ force: true });
    }
  
    selectElement(path, option) {
      cy.xpath(path).select(option, { force: true });
    }
  
   
    validateClassValue(xpath, classValue) {
      cy.xpath(xpath).should("exist").should("have.class", classValue);
    }
  
    validateClassNotPresent(xpath, classValue) {
      cy.xpath(xpath).should("exist").should("not.have.class", classValue);
    }
  
    verifyURL(value) {
      cy.url().should("include", value);
    }
  
    // this will click the link with the title passed into it.
    linkContainsClick(title) {
      cy.xpath(`//a[contains(text(),'${title}')]`)
        .scrollIntoView()
        .should("exist")
        .click({
          force: true,
        });
    }
  
    // this will verify that the element does exists on the dom or not.
    verifyElement(xpath) {
      cy.xpath(xpath).scrollIntoView().should("exist").and("be.visible");
    }
  
    uploadFile(xpath) {
      cy.xpath(xpath).attachFile("../helpers/uploadFile/banner.png");
    }
  
    // this will verify the error message on the form field
    error_message(xpath, value) {
      cy.xpath(xpath).contains(value).should("contain.text", value);
    }
  
    // this function will click enter
    clickEnter(xpath) {
      cy.xpath(xpath).type("{enter}");
    }
  
    //to verify value of xpath
    validateInputValue(xpath, value) {
      cy.xpath(xpath).should("have.value", value);
    }
  
    //to check if an element is selected
    validateSelectedElement(xpath) {
      cy.xpath(xpath).should("be.selected");
    }
  
    clearInputField(xpath) {
      cy.xpath(xpath).clear({ force: true }).should("have.value", "");
    }
  
    //to attach any file to a xpath
    atttachFile(xpath, file) {
      cy.xpath(xpath).attachFile(file);
    }
  
    validateLength(xpath, number) {
      cy.xpath(xpath) // this yields us a jquery object
        .its("length") // calls 'length' property returning that value
  
        .should("eq", number);
    }
  
    selectOption(xpath, value) {
      cy.xpath(xpath).select(value);
    }
  
    visibilityWithContains(xpath, value) {
      cy.xpath(xpath).contains(value).should("be.visible").wait(1000);
    }
  
    exists(xpath) {
      cy.xpath(xpath).should("exist").wait(1000);
    }
  }
