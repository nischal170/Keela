
export function campaignNavBar(){
    return{
        "xpath":{
            "campaignsNav":"//ul[contains(@class, 'nav-main')]/li[6]//span"
        },
        "value":{
            "campaignsNav":"Campaigns"
        }
    }
}
export function table(){
    return{
        "xpath":{
    "campaign_name":"//tbody/tr/td[2]/a/span"
        }
    }
}
export function campaignMainPage(campaign){
    return{
        "xpath":{
            "searchBar":"//input[@placeholder='Search...']",
            "createCampaignsBtn":"//button[@data-tracking-button='campaigns-add-campaign']",
            "searchedCampaign":`(//tbody/tr/td[2][contains(a,"${campaign}")]//span/span)[1]`,
            "checkbox":`//tbody/tr/td[2][contains(a,"${campaign}")]/preceding-sibling::td[1]/div/input`
        },
        "value":{
            "createCampaignsBtn":"Create Campaign",
            
        },
        "pageUrl":"/campaigns",
        "pageTitleXpath":"//li[contains(@class, 'breadcrumb-item')]//span",
        "pageTitle":"All Campaigns"
    }
}

export function buttons(){
    return{
        "xpath":{
            "cancelBtn":"//button[normalize-space()='Cancel']",
            "saveBtn":"//button[@data-tracking-button='add-campaign-modal-save']"
        },
        "value":{
            "cancelBtn":"Cancel", 
            "saveBtn":"Save"
        }
        

    }
}

export function campaignForm() {
    return {
       
        "xpath": {
            "campaignName": "//div[@data-tracking-input='campaigns-Campaigns-name'] //input",
            "description": "//div[@data-tracking-input='campaigns-Campaigns-description'] //textarea",
            "fundRaisingGoal":"//div[@data-tracking-input='campaigns-Campaigns-fundraisingGoal'] //input",
            "followers":"(//div[@data-tracking-input='campaigns-Campaigns-Users'] //input)[1]"
            
        
        },
        "validation":
        {
            "campaignName":{
                "xpath":"//div[contains(@class,'invalid-feedback')]",
            "message":"Required."
        }
        }
        
    }
}
export function campaignEditForm() {
    return {
       
        "xpath": {
            "campaignName": "//div[@data-tracking-input='campaign-overview-Campaigns-name'] //input",
            "description": "//div[@data-tracking-input='campaign-overview-Campaigns-description'] //textarea",
            "fundRaisingGoal":"//div[@data-tracking-input='campaign-overview-Campaigns-fundraisingGoal'] //input",
            "followers":"(//div[@data-tracking-input='campaign-overview-Campaigns-Users'] //input)[1]"
            
        
        },
        "validation":
        {
            "campaignName":{
                "xpath":"//div[contains(@class,'invalid-feedback')]",
            "message":"Required."
        }
        }
        
    }
}

export function campaignDetailsPage(){
    return{
        "pageUrl":"/overview",
        "name":"(//span[contains(@class,'font-size-h5 ')])[2]",
        "actionBtn":"//button[@data-tracking-button='campaign-overview-actions']",
        "editBtn":"(//div[contains(@class,'dropdown-menu')] /a[1])[2]",
        "dialogBoxName":"(//div[contains(@class,'block-header')]/h3)[4]"

    }
}
export function delete_action(){
    return{
    "xpath":{
        "actionBtn":"(//button[contains(@class,'btn-outline-primary')])",
        "deleteBtn":"//div[contains(@class,'dropdown-menu')] /a[4]",
        "deleteDialogTitle":"//div[contains(@class,'swal2-header')]/h2",
        "deleteConfirmationField":"//input[contains(@class,'swal2-input')]",
        "deleteConfirmBtn":"//button[contains(@class,'swal2-confirm')]"

    },
    "value":{
        "actionBtn":"Actions",
        "deleteBtn":"Delete",
        "deleteDialogTitle":"Delete Campaign",
        "deleteConfirmBtn":"Confirm"

    }
}
}

