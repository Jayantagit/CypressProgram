describe('DD', () => {
    it('Select Dropdown', () => {

        cy.visit("https://example.cypress.io/commands/actions")
        cy.get(".form-control.action-select").select("oranges")


    });

    it('Without Select Dropdown', () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("span#select2-reasondummy-container").click()
        cy.get("li.select2-results__option").each(($ele) => {
            if ($ele.text() === "Expedite passport renewal")

                cy.wrap($ele).click()
        });



    });
    it.only('Auto Suggesstion', () => {

        cy.visit("https://www.google.com/");
        cy.get("textarea.gLFyf").clear()
        cy.get("textarea.gLFyf").type("cypress automation");
        cy.wait(6000);
        cy.get("div.wM6W7d span").should('have.length.gt',0)
        cy.get("div.wM6W7d span").each((ele) => {
            if (ele.text().includes("course")) {
                cy.wrap(ele).click()
            }

        })
        cy.get("textarea.gLFyf").should('have.value','cypress automation course')



    });
});