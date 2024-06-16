describe('DDT', () => {
    let testDataDemo;
    before(() => {
        cy.fixture("userlogin").then((hrm) => {
            testDataDemo = hrm;
        })
    });
    it('DDT', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type(testDataDemo.email)
        cy.get("input[placeholder='Password']").type(testDataDemo.pwd)
        cy.get("button[type='submit']").click()

    });
});