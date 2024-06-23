describe('API DEMO', () => {

    let authToken = null;
    it('Create Token', () => {

        cy.request({
            method: "POST", url: "https://restful-booker.herokuapp.com/auth",
            headers:
            {
                'Content-Type': 'application/json',
            },
            body:
            {
                "username": "admin",
                "password": "password123"
            }
        }).then((response) => {
            const token = response.body.token;
            authToken = token;
            cy.log(authToken)

        })


    });

    it('Update', () => {

        cy.request({
            method: "PUT", url: "https://restful-booker.herokuapp.com/booking/80",
            headers:
            {
                'Content-Type': 'application/json',
                'cookie': authToken
            },
            body:
            {
                "firstname": "James",
                "lastname": "Brown",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((response) => {

            expect(response.status).to.eql(201);


        })


    });
});