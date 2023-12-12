describe('testing filter score', ()=>{
   it('test', () => {
    cy.session("Login Session", () => {
        cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk')).wait(5000)
    })
    cy.visit("/Pool")
    cy.filterProfileStatus('PAID')
    // cy.contains('EmZi Cantaro').click()
    cy.get(':nth-child(3) > a > .wrap-avatar-name > .MuiAvatar-root > .MuiAvatar-img').click({force:true})
    cy.contains('Member Card').click()
    cy.wait(4000)
    // cy.contains('Match Manually').click()
    cy.get('.mci-matchmaker-button').click()
   });

   it.only('test2', () => {
    cy.session("Login Session", () => {
        cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk')).wait(5000)
    })
    cy.visit('/manualmatch/653fe79bff6cff9ab57238f0')
   });
})