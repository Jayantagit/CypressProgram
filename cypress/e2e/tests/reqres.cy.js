
describe('API Testing', () => {

    it.only('GET', () => {

        cy.request({
            method: 'GET', url: 'https://reqres.in/api/users',
            qs: { page: 2 }
        }).then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body.data[0]).have.property("id",7)
        })

    });

    it('POST Request', () => {

        cy.request(
            {
                method: 'POST', url: 'https://reqres.in/api/users',
                body:
                {
                    name: "Joy",
                    job: "QA1"
                }
            }).then((response) => {
                expect(response.status).to.eql(201);
                expect(response.body).property("job").to.eql("QA1");
                // cy.log(response.body);          
                const userid = response.body.id;
                return userid
            })
            .then((userid) => {
                cy.request({ method: 'GET', url: 'https://reqres.in/api/users/' + userid }).
                    //  its('status').should('equal', 200)
                    then((response) => {
                        expect(response.status).to.eql(200);
                    });


            })
    })

    it('API Chaining', () => {

        cy.request(
            {
                method: 'POST', url: 'https://reqres.in/api/users',
                body:
                {
                    name: "Joy",
                    job: "QA1"
                }
            }).then((response) => {
                expect(response.status).to.eql(201);
                expect(response.body).property("job").to.eql("QA1");
                // cy.log(response.body);          
                const userid = response.body.id;
                cy.request({ method: 'GET', url: 'https://reqres.in/api/users/' + userid }).
                    //  its('status').should('equal', 200)
                    then((response) => {
                        expect(response.status).to.eql(200);
                    });


            })
    })

});



