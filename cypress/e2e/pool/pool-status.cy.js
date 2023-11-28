describe("pool admin", () => {

    beforeEach("Pre conditions", () => {
        cy.session("Login Session", () => {
            cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk')).wait(5000)
        })
    })

    it("Filter Status SUBMITTED", () => {
        cy.filterProfileStatus("SUBMITTED")
    })

   it("Filter Status HOLD", () => {
    cy.filterProfileStatus("HOLD")
   })

   it("Filter Status AMEND", () => {
    cy.filterProfileStatus("AMEND")
   })

   it("Filter Status REJECTED", () => {
    cy.filterProfileStatus("REJECTED")
   })

   it("Filter Status INTERVIEW", () => {
    cy.filterProfileStatus("INTERVIEW")
   })

   it("Filter Status INTERVIEWPAID", () => {
    cy.filterProfileStatus("INTERVIEWPAID")
   })

   it("Filter Status INTERVIEWAPPROVED", () => {
    cy.filterProfileStatus("INTERVIEWAPPROVED")
   })

   it("Filter Status INTERVIEWREJECTED", () => {
    cy.filterProfileStatus("INTERVIEWREJECTED")
   })

   it("Filter Status INTERVIEWSKIPPED", () => {
    cy.filterProfileStatus("INTERVIEWSKIPPED")
   })

   it("Filter Status BCKINIT", () => {
    cy.filterProfileStatus("BCKINIT")
   })

   it("Filter Status BCKCOMPLETED", () => {
    cy.filterProfileStatus("BCKCOMPLETED")
   })

   it("Filter Status BCKREJECTED", () => {
    cy.filterProfileStatus("BCKREJECTED")
   })

   it("Filter Status PAID", () => {
    cy.filterStatus("PAID")
   })

   it("Filter Status PAIDCANCELLED", () => {
    cy.filterStatus("PAIDCANCELLED")
   })
   
})