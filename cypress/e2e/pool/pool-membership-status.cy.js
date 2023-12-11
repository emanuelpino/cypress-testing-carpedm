describe("Pool - Membership Status", () => {

    beforeEach("Pre conditions", () => {
        cy.session("Login Session", () => {
            cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk')).wait(5000)
        })
        cy.visit('/Pool')
    })

    it("Filter Status Active", () => {
        cy.filterMembershipStatus("Active")
    })
   
    it("Filter Status Cancelled", () => {
        cy.filterMembershipStatus("Cancelled")
    })
   
    it("Filter Status Suspended", () => {
        cy.filterMembershipStatus("Suspended")
    })
   
    it("Filter Status Deposit Payed", () => {
        cy.filterMembershipStatus("DepositPayed")
    })
   
    it("Filter Status Paused", () => {
        cy.filterMembershipStatus("Paused")
    })
   
    it("Filter Status Scheduled to Cancel", () => {
        cy.filterMembershipStatus("ScheduledToCancel")
    })
   
    it("Filter Status Trialing", () => {
        cy.filterMembershipStatus("Trialing")
    })
   
})