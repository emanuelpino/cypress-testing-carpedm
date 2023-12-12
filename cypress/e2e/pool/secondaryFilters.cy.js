describe('Secondary Filters', ()=>{
    beforeEach("Pre conditions", () => {
        cy.session("Login Session", () => {
            cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk')).wait(5000)
        })
        cy.visit("/Pool")
    })

    // Secondary Filters -> Body Type

    it('Secondary Filters - Body Type "Slim"', () => {
        cy.filterSecondaryFiltersBodyType('Slim')
    });

    it('Secondary Filters - Body Type "Athletic"', () => {
        cy.filterSecondaryFiltersBodyType('Athletic')
    });

    it('Secondary Filters - Body Type "Muscular"', () => {
        cy.filterSecondaryFiltersBodyType('Muscular')
    });

    it('Secondary Filters - Body Type "Petite"', () => {
        cy.filterSecondaryFiltersBodyType('Petite')
    });

    it('Secondary Filters - Body Type "Average"', () => {
        cy.filterSecondaryFiltersBodyType('Average')
    });

    it('Secondary Filters - Body Type "Overweight"', () => {
        cy.filterSecondaryFiltersBodyType('Overweight')
    });

    it('Secondary Filters - Body Type "Curvy"', () => {
        cy.filterSecondaryFiltersBodyType('Curvy')
    });

    it('Secondary Filters - Body Type "Full-figured"', () => {
        cy.filterSecondaryFiltersBodyType('Full-figured')
    });

    it('Secondary Filters - Body Type "Stocky"', () => {
        cy.filterSecondaryFiltersBodyType('Stocky')
    });

    it('Secondary Filters - Body Type "Dad Bod"', () => {
        cy.filterSecondaryFiltersBodyType('Dad Bod')
    });

    // Secondary Filters -> Smoking

    it('Secondary Filters - Smoking "Yes"', () => {
        cy.filterSecondaryFiltersSmoking('Yes')
    });

    it('Secondary Filters - Smoking "No"', () => {
        cy.filterSecondaryFiltersSmoking('No')
    });

    it('Secondary Filters - Smoking "Marijuana"', () => {
        cy.filterSecondaryFiltersSmoking('Marijuana')
    });

    // Secondary Filters -> Religion

    it('Secondary Filters - Religion "Christianity"', () => {
        cy.filterSecondaryFiltersReligion('Christianity')
    });

    it('Secondary Filters - Religion "Catholicism"', () => {
        cy.filterSecondaryFiltersReligion('Catholicism')
    });

    it('Secondary Filters - Religion "Judaism"', () => {
        cy.filterSecondaryFiltersReligion('Judaism')
    });

    it('Secondary Filters - Religion "Buddhism"', () => {
        cy.filterSecondaryFiltersReligion('Buddhism')
    });

    it('Secondary Filters - Religion "Sikhism"', () => {
        cy.filterSecondaryFiltersReligion('Sikhism')
    });

    it('Secondary Filters - Religion "Islam"', () => {
        cy.filterSecondaryFiltersReligion('Islam')
    });

    it('Secondary Filters - Religion "Hinduism"', () => {
        cy.filterSecondaryFiltersReligion('Hinduism')
    });

    it('Secondary Filters - Religion "Agnosticism"', () => {
        cy.filterSecondaryFiltersReligion('Agnosticism')
    });

    it('Secondary Filters - Religion "Rastafarianism"', () => {
        cy.filterSecondaryFiltersReligion('Rastafarianism')
    });

    it('Secondary Filters - Religion "Atheism"', () => {
        cy.filterSecondaryFiltersReligion('Atheism')
    });

    it('Secondary Filters - Religion "Other"', () => {
        cy.filterSecondaryFiltersReligion('Other')
    });

    it('Secondary Filters - Religion "Prefer not to say"', () => {
        cy.filterSecondaryFiltersReligion('Prefer not to say')
    });

    // Secondary Filters -> Politics

    it('Secondary Filters - Politics "Conservative"', () => {
        cy.filterSecondaryFiltersPolitics('Conservative')
    });

    it('Secondary Filters - Politics "Conservative"', () => {
        cy.filterSecondaryFiltersPolitics('Conservative')
    });

    it('Secondary Filters - Politics "Progressive"', () => {
        cy.filterSecondaryFiltersPolitics('Progressive')
    });

    it('Secondary Filters - Politics "Liberal"', () => {
        cy.filterSecondaryFiltersPolitics('Liberal')
    });

    it('Secondary Filters - Politics "Libertarian"', () => {
        cy.filterSecondaryFiltersPolitics('Libertarian')
    });

    it('Secondary Filters - Politics "Socialist"', () => {
        cy.filterSecondaryFiltersPolitics('Socialist')
    });

    it('Secondary Filters - Politics "Nationalist"', () => {
        cy.filterSecondaryFiltersPolitics('Nationalist')
    });

    it('Secondary Filters - Politics "Capitalist"', () => {
        cy.filterSecondaryFiltersPolitics('Capitalist')
    });

    it('Secondary Filters - Politics "Moderate"', () => {
        cy.filterSecondaryFiltersPolitics('Moderate')
    });

    it('Secondary Filters - Politics "Other"', () => {
        cy.filterSecondaryFiltersPolitics('Other')
    });

    // Secondary Filters -> Children

    // it('Secondary Filters - Children "I don't have children"', () => {
    //     cy.filterSecondaryFiltersChildren('Other')
    // });

    // Secondary Filters -> Education 

    it('Secondary Filters - Education "High School"', () => {
        cy.filterSecondaryFiltersEducation('High School')
    });

    it('Secondary Filters - Education "College"', () => {
        cy.filterSecondaryFiltersEducation('College')
    });

    it('Secondary Filters - Education "Graduate"', () => {
        cy.filterSecondaryFiltersEducation('Graduate')
    });

    it('Secondary Filters - Education "Doctorate"', () => {
        cy.filterSecondaryFiltersEducation('Doctorate')
    });

    it('Secondary Filters - Education "Masters"', () => {
        cy.filterSecondaryFiltersEducation('Masters')
    });

    it('Secondary Filters - Education "PhD"', () => {
        cy.filterSecondaryFiltersEducation('PhD')
    });

    // Secondary Filters -> Income

    it('Secondary Filters - Income "$0 - $49,000"', () => {
        cy.filterSecondaryFiltersIncome('$0 - $49,000')
    });

    it('Secondary Filters - Income "$0 - $49,000"', () => {
        cy.filterSecondaryFiltersIncome('$0 - $49,000')
    });

    it('Secondary Filters - Income "$100,000 - $149,000"', () => {
        cy.filterSecondaryFiltersIncome('$$100,000 - $149,000')
    });

    it('Secondary Filters - Income "$150,000 - $199,000"', () => {
        cy.filterSecondaryFiltersIncome('$150,000 - $199,000')
    });

    it('Secondary Filters - Income "$200,000+"', () => {
        cy.filterSecondaryFiltersIncome('$200,000+')
    });

    it('Secondary Filters - Income "I prefer not to say"', () => {
        cy.filterSecondaryFiltersIncome('I prefer not to say')
    });

    // Secondary Filters -> High Profile

    it('Secondary Filters - Hogh Profile "Yes"', () => {
        cy.filterSecondaryFiltersHighProfile('Yes')
    });

    it('Secondary Filters - Hogh Profile "No"', () => {
        cy.filterSecondaryFiltersHighProfile('No')
    });

    it('Secondary Filters - Hogh Profile "N/A"', () => {
        cy.filterSecondaryFiltersHighProfile('N/A')
    });
})