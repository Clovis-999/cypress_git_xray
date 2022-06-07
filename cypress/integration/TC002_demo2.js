/// <reference types="cypress" />

describe('Test invalid username and password (should failed)', () => {
  before(() => {
    cy.clearCookies({ log: false })
    cy.visit('/')
  })

  it('Login test invalid user', function () {
    cy.get("[data-test='username']").type('problem_user')
    cy.get("[data-test='password']").type('secret_sauce')
    cy.get("[data-test='login-button']").click()
    //cy.url().should('include', '/success')
  })
})
