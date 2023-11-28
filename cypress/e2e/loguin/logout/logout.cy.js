describe('Logout flow', () => {

    beforeEach( () => {
        cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk'))
    })

    it('Logout OK', () => {
        cy.url().should('include', '/home')
        cy.logout()
    })
})