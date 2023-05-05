export function loginForm() {
    return {
       
        "xpath": {
            "email": "//input[@id='user-email']",
            "password": "//input[@id='user-password']",
            "loginBtn":"//button[@type='submit']",
            "registerOrg":"//a[@href='/register']",
            "forgotPwd":"//a[@href='/']",
            "invalidAlert":"//div[@class='notification-title']"
        },
        "value":{
            "loginBtn":"Log in", //should be "Log In" instead
            "invalidAlert":" Login failed. Invalid email or password "
        }
        
    }
}
