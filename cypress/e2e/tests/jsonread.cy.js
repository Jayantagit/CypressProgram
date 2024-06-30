const Ajv = require("ajv")
const ajv = new Ajv()

describe('Fakestore APi-Parsing json response', () => {
    it('Parsing Json', () => {

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',

        })
            .then((response) => {
                expect(response.status).to.be.equal(200)
                expect(response.body[0].id).to.be.equal(1)
                expect(response.body[0].price).to.be.equal(109.95)
                expect(response.body[0].rating.rate).to.equal(3.9)
            })

    });
    it('Reading multiple values', () => {
        let totalPrice = 0;
        let totalRating = 0.0;

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: { limit: 5 }

        })
            .then((response) => {

                response.body.forEach(element => {

                    totalPrice = totalPrice + element.price
                    totalRating = totalRating + element.rating.rate

                });
                cy.log("Total Price:", totalPrice, totalRating)
            })

    });

    it.only('schema validation', () => {

        let schema = {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "title": {
                            "type": "string"
                        },
                        "price": {
                            "type": "number"
                        },
                        "description": {
                            "type": "string"
                        },
                        "category": {
                            "type": "string"
                        },
                        "image": {
                            "type": "string"
                        },
                        "rating": {
                            "type": "object",
                            "properties": {
                                "rate": {
                                    "type": "number"
                                },
                                "count": {
                                    "type": "integer"
                                }
                            },
                            "required": [
                                "rate",
                                "count"
                            ]
                        }
                    },
                    "required": [
                        "id",
                        "title",
                        "price",
                        "description",
                        "category",
                        "image",
                        "rating"
                    ]
                }
            ]
        }

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: { limit: 1 }

        }).then((response) => {

            const validate = ajv.compile(schema)
            const valid = validate(response.body)
            if (!valid) {
                cy.log(validate.errors)
            }
            else {
                cy.log(valid)
            }


        })

    });
});