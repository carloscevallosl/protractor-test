//Test cases file
describe('To test login flows', function(){
    //function that lets open the main page on each test case
    beforeEach(function(){
        browser.get('http://localhost:8081/index.html#!/login')
    });
    //variable of login home page
    var login_home_page = require ('../protractor_test/login_home_page.js')

    //test case to register a new user 
    it('Should be able to register a new user', function(){
        //Getting the register page object 
        var register_page = login_home_page.clickRegister();
        //Setting registration form data
        register_page.enterFirstNameValue('Carlos');
        register_page.enterLastNameValue('Cevallos');
        register_page.enterUserValue('charlie');
        register_page.enterPasswordValue('Password01');
        //Canceling registration
        login_home_page = register_page.clickCancel();
        //Redirecting again to register page
        login_home_page.clickRegister();
        //Setting registration form data
        register_page.enterFirstNameValue('Carlos');
        register_page.enterLastNameValue('Cevallos');
        register_page.enterUserValue('charlie');
        register_page.enterPasswordValue('Password01');
        //Confirm registration
        register_page.clickRegister();
        //Validation of message expected to be shown
        expect(login_home_page.getMessageText()).toBe('Registration successful');
        //Browser idle to view page result
        browser.sleep(1000);
    });
    
    //Test case setting incorrect username
    it('Should be able to detect an incorrect user', function(){
        //Setting user data
        login_home_page .enterUserValue('Carlos Cevallos');
        login_home_page .enterPasswordValue('Password01');
        //Click on login button
        login_home_page.clickLogin();
        //Validation of message expected to be shown
        expect(login_home_page.getMessageText()).toBe('Username or password is incorrect');
        //Browser idle to view page result
        browser.sleep(1000);
    });

    //Test case setting incorrect password
    it('Should be able to detect an incorrect user', function(){
        //Setting user data
        login_home_page .enterUserValue('charlie');
        login_home_page .enterPasswordValue('Pass');
        //Click on login button
        login_home_page.clickLogin();
        //Validation of message expected to be shown
        expect(login_home_page.getMessageText()).toBe('Username or password is incorrect');
        //Browser idle to view page result
        browser.sleep(1000);
    });

    //Test case setting incorrect user and password
    it('Should be able to detect an incorrect user', function(){
        //Setting user data
        login_home_page .enterUserValue('Carlos Cevallos');
        login_home_page .enterPasswordValue('Pass');
        //Click on login button
        login_home_page.clickLogin();
        //Validation of message expected to be shown
        expect(login_home_page.getMessageText()).toBe('Username or password is incorrect');
        //Browser idle to view page result
        browser.sleep(1000);
    });

    it('Should be able to login with correct credentials', function(){
        //Setting user data
        login_home_page .enterUserValue('charlie');
        login_home_page .enterPasswordValue('Password01');
        login_home_page.clickLogin();
        //Click on login button
        browser.sleep(2000);
    });

    
});