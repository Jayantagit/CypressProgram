describe('REstFul Booker', () => {
    it('get booking', () => {

        cy.request("GET", "https://restful-booker.herokuapp.com/booking/1").then((response) => {
            expect(response.status).to.eql(200);
        })

    });
});