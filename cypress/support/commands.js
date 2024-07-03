// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types= "cypress" />
require("cypress-xpath")
require('cypress-iframe')
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')
Cypress.Commands.add('OrangeHRMLogin',(email,password)=>
{
    cy.get("input[placeholder='Username']").type(email)
    cy.get("input[placeholder='Password']").type(password)
    cy.get("button[type='submit']").click()
})

Cypress.Commands.add('fillContactForm',(formData)=>
    {
        cy.get("[data-qa='name']").type(formData.username)
        cy.get("[data-qa='email']").type(formData.email)
        cy.get("[data-qa='subject']").type(formData.subject)
        cy.get("[name='upload_file']").selectFile(formData.filepath)
        cy.get("[data-qa='submit-button']").click()
        cy.get("ul.nav.navbar-nav li:nth-child(8) a").click()
    })
