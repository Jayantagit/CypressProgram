import { LoginPageActions } from "../../Pages/PageActions/LoginPageAction";

let loginPage=new LoginPageActions();

describe('Page-Test', () => {
       it('DDT-Custom Command-Page Objects', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("userlogin").then((testdata) => {
            loginPage.enterusername(testdata.email)
            loginPage.enterpassword(testdata.pwd)
            loginPage.signIn();

        })
    });
});