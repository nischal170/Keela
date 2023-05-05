
export function contactNavBar(){
    return{
        "xpath":{
            "contactsNav":"//ul[contains(@class, 'nav-main')]/li[3]//span"
        },
        "value":{
            "contactsNav":"Contacts"
        }
    }
}
export function contactMainPage(fullName){
    return{
        "xpath":{
            "searchBar":"//input[@placeholder='Search...']",
            "addContactsBtn":"//button[@data-tracking-button='contacts-add-contact']",
            "searchedName":`//tbody/tr/td[2][contains(a,"${fullName}")]`,
            "checkbox":`//tbody/tr/td[2][contains(a,"${fullName}")]/preceding-sibling::td[1]/div/input`
        },
        "value":{
            "addContactsBtn":"Add Contact",
            
        },
        "pageUrl":"/contacts",
        "pageTitleXpath":"//li[contains(@class, 'breadcrumb-item')]//span",
        "pageTitle":"All Contacts"
    }
}

export function buttons(){
    return{
        "xpath":{
            "cancelBtn":"//button[normalize-space()='Cancel']",
            "saveBtn":"//button[@data-tracking-button='add-person-contact-modal-save']",
            "edit":"(//button[contains(@class, 'btn btn-dual')])[1]",
            "editSave":"//button[@data-tracking-button='edit-contact-modal-save']"
        },
        "value":{
            "cancelBtn":"Cancel", 
            "saveBtn":"Save",
            "edit":"Edit",
            "editSave":"Save"
        }
        

    }
}

export function contactForm() {
    return {
       
        "xpath": {
            "fName": "//div[@data-tracking-input='contacts-PersonContacts-firstName'] //input",
            "mName": "//div[@data-tracking-input='contacts-PersonContacts-middleName'] //input",
            "lName":"//div[@data-tracking-input='contacts-PersonContacts-lastName'] //input",
            "eMail":"//div[@data-tracking-input='contacts-PersonContacts-primaryEmail'] //input",
            "emailSubStats":"//div[@data-tracking-input='contacts-PersonContacts-subscriptionStatus'] //select",//select
            "phone":"//div[@data-tracking-input='contacts-PersonContacts-primaryPhone'] //input",
            "bDay":"(//div[@data-tracking-input='contacts-PersonContacts-birthDate'] //select)[1]",
            "bMonth":"(//div[@data-tracking-input='contacts-PersonContacts-birthDate'] //select)[2]",
            "bYear":"(//div[@data-tracking-input='contacts-PersonContacts-birthDate'] //select)[3]",
            "addressLine1":"(//div[@data-tracking-input='contacts-PersonContacts-primaryAddress'] //input)[1]",
            "addressLine2":"(//div[@data-tracking-input='contacts-PersonContacts-primaryAddress'] //input)[2]",
            "country":"(//div[@data-tracking-input='contacts-PersonContacts-primaryAddress'] //input)[3]",
            "city":"(//div[@data-tracking-input='contacts-PersonContacts-primaryAddress'] //input)[4]",
            "stateProvince":"(//div[@data-tracking-input='contacts-PersonContacts-primaryAddress'] //input)[5]",
            "postalCode":"(//div[@data-tracking-input='contacts-PersonContacts-primaryAddress'] //input)[6]",
            "company":"//div[@data-tracking-input='contacts-undefined-CompanyContacts'] //input",
            "companyRole":"//div[@data-tracking-input='contacts-undefined-companyPosition'] //input",
            "household":"//div[@data-tracking-input='contacts-PersonContacts-Households'] //input",
            "assignee":"//div[@data-tracking-input='contacts-PersonContacts-Assignee'] //input",
            "priority":"//div[@data-tracking-input='contacts-PersonContacts-priority'] //select",
            "tags":"//div[@data-tracking-input='contacts-PersonContacts-Tags'] //div[@class='vs__selected-options']//input",
        
        }
        
    }
}

export function contactDetailsPage(){
    return{
        "pageUrl":"/profile",
        "personalInfo":"(//h3[@class='block-title'])[3]",
        "name":"//div[contains(@class, 'block-content')][1]/div/div[2]/span/span"

    }
}
export function alertMessage(){
    return{
        "xpath":{
            "emptyField":"//div[@class='notification-title']",

        },
        "value":{
            "emptyField":" Contact must contain at least one of the required fields ",
        }
        
       

    }
}

export function table(){
    return{
        "xpath":{
    "contact_name":"//tbody/tr/td[2]//span/span"
        }
    }
}
export function editDiaglog(){
    return{
        "xpath":{
    "diaglogBoxName":"(//div[contains(@class, 'block-header block-header-default border-bottom')])[9]",
    "fName":"//div[@data-tracking-input='contact-profile-PersonContacts-firstName']//input",
    "mName": "//div[@data-tracking-input='contact-profile-PersonContacts-middleName']//input",
    "lName":"//div[@data-tracking-input='contact-profile-PersonContacts-lastName']//input",
    "eMail":"//div[@data-tracking-input='contact-profile-PersonContacts-primaryEmail']//input",
    "notification":"//div[@class='notification-title']"
        },
        "value":{
            "diaglogBoxName":"Edit More Options",
            "notification":"Contact successfully updated"
        }
    }
}

export function delete_action(){
    return{
    "xpath":{
        "actionBtn":"//button[@data-tracking-button='contacts-actions']",
        "deleteBtn":"//div[contains(@class,'dropdown-menu')] /a[2]",
        "deleteDialogTitle":"//div[contains(@class,'swal2-header')]/h2",
        "deleteConfirmationField":"//input[contains(@class,'swal2-input')]",
        "deleteConfirmBtn":"//button[contains(@class,'swal2-confirm')]"

    },
    "value":{
        "actionBtn":"Actions",
        "deleteBtn":"Delete",
        "deleteDialogTitle":"Delete Contacts",
        "deleteConfirmBtn":"Confirm"

    }
}
}