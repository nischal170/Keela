
export function impactAreaNavBar(){
    return{
        "xpath":{
            "impactAreaNav":"//ul[contains(@class, 'nav-main')]/li[5]//span"
        },
        "value":{
            "impactAreaNav":"Impact Areas"
        }
    }
}
export function table(){
    return{
        "xpath":{
    "impactArea_name":"//tbody/tr/td[2]/a/span"
        }
    }
}


export function impactAreaDetailsPage(){
    return{
        "pageUrl":"/transactions",
        "name":"(//tbody)[2] //span",
        "menuButton":"(//button[@data-tracking-button='impact-area-transactions-'])[2]",
        "editBtn":"(//div[contains(@class,'dropdown-menu')])[3]/a[1]"


    }
}
export function impactAreaMainPage(impactArea){
    return{
        "xpath":{
            "searchBar":"//input[@placeholder='Search...']",
            "newImpactAreaBtn":"//button[normalize-space()='New Impact Area']",
            "searchedImpactArea":`(//tbody/tr/td[2][contains(a,"${impactArea}")]//span/span)[1]`,
            "checkbox":`//tbody/tr/td[2][contains(a,"${impactArea}")]/preceding-sibling::td[1]/div/input`
        },
        "value":{
            "newImpactAreaBtn":"New Impact Area",
            
        },
        "pageUrl":"/impact-areas",
        "pageTitleXpath":"//li[contains(@class, 'breadcrumb-item')]//span",
        "pageTitle":"All Impact Areas"
    }
}

export function buttons(){
    return{
        "xpath":{
            "cancelBtn":"//button[normalize-space()='Cancel']",
            "saveBtn":"//button[@type='submit']"
        },
        "value":{
            "cancelBtn":"Cancel",
            "saveBtn":"Save"
        }
        

    }
}

export function impactAreaForm() {
    return {
       
        "xpath": {
            "impactAreaName": "//div[@data-tracking-input='impact-areas-ImpactAreas-name'] //input",
            "description": "//div[@data-tracking-input='impact-areas-ImpactAreas-description'] //textarea"
        
        },
        "validation":
        {
            "impactAreaName":{
                "xpath":"//div[contains(@class,'invalid-feedback')]",
            "message":"Required."
        }
        }
    
    }
}

export function impactAreaEditForm() {
    return {
       
        "xpath": {
            "impactAreaName": "//div[@data-tracking-input='impact-area-transactions-ImpactAreas-name'] //input",
            "description": "//div[@data-tracking-input='impact-area-transactions-ImpactAreas-description'] //textarea"
        
        },
        "validation":
        {
            "impactAreaName":{
                "xpath":"//div[contains(@class,'invalid-feedback')]",
            "message":"Required."
        }
        }
    
    }
}
export function delete_action(){
    return{
    "xpath":{
        "actionBtn":"//button[contains(@class,'btn-outline-primary')]",
        "deleteBtn":"//div[contains(@class,'dropdown-menu')] /a[1]",
        "deleteDialogTitle":"//div[contains(@class,'swal2-header')]/h2",
        "deleteConfirmationField":"//input[contains(@class,'swal2-input')]",
        "deleteConfirmBtn":"//button[contains(@class,'swal2-confirm')]"

    },
    "value":{
        "actionBtn":"Actions",
        "deleteBtn":"Delete",
        "deleteDialogTitle":"Delete Impact Areas",
        "deleteConfirmBtn":"Confirm"

    }
}
}


