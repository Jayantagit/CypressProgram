import neatCsv from 'neat-csv';

describe('Read Data from CSV', () => {
    it('csv Read', () => {
        cy.fixture("user.csv").then((data)=>
        {
            console.log(data.fname,data.lname);
        })
        console.log(neatCsv(csv));
        
    });
});