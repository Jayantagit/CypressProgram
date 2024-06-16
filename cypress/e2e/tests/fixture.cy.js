describe('DDT', () => {
    it.skip('DDT', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("userlogin").then((testdata) => {
            cy.get("input[placeholder='Username']").type(testdata.email)
            cy.get("input[placeholder='Password']").type(testdata.pwd)
            cy.get("button[type='submit']").click()

        })
    });
    it('DDT-Custom Command', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("userlogin").then((testdata) => {
            cy.OrangeHRMLogin(testdata.email, testdata.pwd)

        })
    });
});