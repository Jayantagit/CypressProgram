describe('Table', () => {
    it('Table Handling', () => {

        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.get("#table1  tbody tr").each((tr) => {
            cy.wrap(tr).find("td").each((cell) => {
                cy.wrap(cell).invoke('text').then((celldata) => {
                    cy.log("Cell data :" , celldata)
                })
            })
        })

    });
});