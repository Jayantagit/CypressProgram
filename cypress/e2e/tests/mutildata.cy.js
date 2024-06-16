describe('DDT2', () => {

    it('MultiData', () => {
        cy.fixture("logindetails").then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach((login) => {
                cy.get("input[placeholder='Username']").type(login.email)
                cy.get("input[placeholder='Password']").type(login.pwd)
                cy.get("button[type='submit']").click()

            });
           


        })
    });


});


