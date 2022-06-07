/// <reference types="cypress" />

describe('Test valid username and password', () => {

    before(() => {
        cy.clearCookies({ log: false })
        cy.visit("/")
    })

    it('Login test valid user', function () {

    cy.get("[data-test='username']").type('standard_user')
    cy.get("[data-test='password']").type('secret_sauce')
    cy.get("[data-test='login-button']").click()
    cy.url().should("include", "/inventory")

    })
      

})
