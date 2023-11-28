describe("pool admin", () => {

    beforeEach("Pre conditions", () => {
        cy.session("Login Session", () => {
            cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk')).wait(5000)
        })
    })

    it("Filter Status SUBMITTED", () => {
        cy.filterStatus("SUBMITTED")
    })

   it("Filter Status HOLD", () => {
    cy.filterStatus("HOLD")
   })

   it("Filter Status AMEND", () => {
    cy.filterStatus("AMEND")
   })

   it("Filter Status REJECTED", () => {
    cy.filterStatus("REJECTED")
   })

   it("Filter Status INTERVIEW", () => {
    cy.filterStatus("INTERVIEW")
   })

   it("Filter Status INTERVIEWPAID", () => {
    cy.filterStatus("INTERVIEWPAID")
   })

   it("Filter Status INTERVIEWAPPROVED", () => {
    cy.filterStatus("INTERVIEWAPPROVED")
   })

   it("Filter Status INTERVIEWREJECTED", () => {
    cy.filterStatus("INTERVIEWREJECTED")
   })

   it("Filter Status INTERVIEWSKIPPED", () => {
    cy.filterStatus("INTERVIEWSKIPPED")
   })

   it("Filter Status BCKINIT", () => {
    cy.filterStatus("BCKINIT")
   })

   it("Filter Status BCKCOMPLETED", () => {
    cy.filterStatus("BCKCOMPLETED")
   })

   it("Filter Status BCKREJECTED", () => {
    cy.filterStatus("BCKREJECTED")
   })

   it("Filter Status PAID", () => {
    cy.filterStatus("PAID")
   })

   it("Filter Status PAIDCANCELLED", () => {
    cy.filterStatus("PAIDCANCELLED")
   })
   
})