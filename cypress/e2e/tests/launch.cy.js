
describe('Orange HRM', () => {
    it('lanch HRM', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("login").then((credential) => {
            cy.OrangeHRMLogin(credential.username, credential.password)

        })

        cy.wait(2000)
        cy.title().should('eq', 'OrangeHRM')
        cy.log("Succesful Login..")
        cy.xpath("//a[contains(@href,'Admin')]").click()
        cy.xpath("//h5[text()='System Users']").should('be.visible')
        cy.contains("PIM").click()



    });
});