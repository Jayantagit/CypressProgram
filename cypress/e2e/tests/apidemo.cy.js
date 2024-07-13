describe('API Tests', () => {
    it.skip('download Base64 image ', () => {

        cy.request({
            url: "https://the-internet.herokuapp.com/download/snickers2.jpg",
            encoding: 'base64'
        }).then((response) => {
            cy.writeFile("/fixtures/test.jpg", response.body, 'base64')
        })
    })
    it.skip('List user ', () => {

        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: 'GET'
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
        })
    })

    it.skip('create user ', () => {

        cy.fixture("payload/createuser").then((reqBody) => {

            cy.request({
                url: "https://reqres.in/api/users",
                method: 'POST',
                body: reqBody
            }).then((response) => {
                cy.log(JSON.stringify(response.body))
                cy.log(response.body.id)
                let getURL = "https://reqres.in/api/users/" + response.body.id;
                cy.request(getURL).then((res) => {
                    cy.log(JSON.stringify(res.body))
                })
            })
        })
    })
    it('create user -alias', () => {

        cy.fixture("payload/createuser").then((reqBody) => {

            cy.request({
                url: "https://reqres.in/api/users",
                method: 'POST',
                body: reqBody
            }).as('createuser')
            cy.get('@createuser').then((res) => {
                let getURL = "https://reqres.in/api/users/" + res.body.id;
                cy.request(getURL).then((res) => {
                    cy.log(JSON.stringify(res.body))
                })

            }
            )

        })
    })
});


