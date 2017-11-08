//This page contains all actions related to login home page
require ('../protractor_test/register_page.js');
//declaration of the main variable
var login_home_page = function(){
        //interaction with the User Name textbox
        this.enterUserValue = function(value){
            element(by.css('#username')).sendKeys(value);
        };
        
        //interaction with the Password textbox
        this.enterPasswordValue = function(value){
            element(by.css('#password')).sendKeys(value);
        };
    
        //getting message
        this.getMessageText = function(value){
            return element(by.binding('flash.message')).getText();
        };

        //interaction with the Login button
        this.clickLogin = function(){
            element(by.buttonText('Login')).click();
        };
        
        //interaction with the Register link
        this.clickRegister = function(){
            element(by.css('a[href*="#!/register"]')).click();     
            return require('./register_page.js');
        };
    };

//Export of this page
    module.exports = new login_home_page ();
    