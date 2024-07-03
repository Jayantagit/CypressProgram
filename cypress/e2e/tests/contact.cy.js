describe('Fixture', () => {
    it('Contact US', () => {
        cy.visit("https://www.automationexercise.com/contact_us")
        cy.clearAllCookies()
        cy.fixture("contactus").then((data) => {
            data.forEach(contactData => {
                //cy.get("[data-qa='name']").type(contactData.username)
                //cy.get("[data-qa='email']").type(contactData.email)
                // cy.get("[data-qa='subject']").type(contactData.subject)
                // cy.get("[name='upload_file']").selectFile(contactData.filepath)
                //cy.Login(contactData.username,contactData.email,"support",contactData.filepath)
                // cy.get("[data-qa='submit-button']").click()
                // cy.get("ul.nav.navbar-nav li:nth-child(8) a").click()
                cy.fillContactForm(contactData)

            });


        })
        cy.writeFile("cypress\\fixtures\\filedownload\\abc.txt", "Success! Your details have been submitted successfully.");
    });
});