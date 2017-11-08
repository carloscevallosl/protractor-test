//This page contains all actions related to register page
require ('../protractor_test/login_home_page.js');
//declaration of the main variable
var register_page = function(){
    //interaction with the First Name textbox
    this.enterFirstNameValue = function(value){
        element(by.css('#firstName')).sendKeys(value);
    };
    
    //interaction with the Last Name textbox
    this.enterLastNameValue = function(value){
        element(by.css('#Text1')).sendKeys(value);
    };

    //interaction with the User Name textbox
    this.enterUserValue = function(value){
        element(by.css('#username')).sendKeys(value);
    };
    
    //interaction with the Password textbox
    this.enterPasswordValue = function(value){
        element(by.css('#password')).sendKeys(value);
    };

    //interaction with the Register button
    this.clickRegister = function(){
        element(by.buttonText('Register')).click();
        return require('./login_home_page.js');
    };

    //interaction with the Cancel link
    this.clickCancel = function(){
        element(by.css('a[href*="#!/login"]')).click();
        return require('./login_home_page.js');
    };
};
 //Export of this page
module.exports = new register_page();
    