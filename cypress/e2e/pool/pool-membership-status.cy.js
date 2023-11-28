describe("Pool Profile Status", () => {

    beforeEach("Pre conditions", () => {
        cy.session("Login Session", () => {
            cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk')).wait(5000)
        })
        cy.visit('/Pool')
    })

    it("Filter Status Active", () => {
        cy.filterMembershipStatus("Active")
    })
   
})