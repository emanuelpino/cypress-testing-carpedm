describe('Pool - Primary Filters', () => {
    beforeEach("Pre conditions", () => {
        cy.session("Login Session", () => {
            cy.login(Cypress.env('emailOk'), Cypress.env('passwordOk')).wait(5000)
        })
        cy.visit("/Pool")
    })

    // Primary Filters -> Age

    it('Primary Filters - Age "Random Age"', () => {
        cy.filterPrimaryFiltersAge()
    });

    // Primary Filters -> Sexual Preference

    it('Primary Filters - Sexual Preference "Heterosexual"', () => {
        cy.filterPrimaryFilterSexualPreference("Heterosexual")
    })

    it('Primary Filters - Sexual Preference "Homosexual"', () => {
        cy.filterPrimaryFilterSexualPreference('Homosexual')
    })

    it('Primary Filters - Sexual Preference "Lesbian"', () => {
        cy.filterPrimaryFilterSexualPreference('Lesbian')
    })

    it('Primary Filters - Sexual Preference "Queer"', () => {
        cy.filterPrimaryFilterSexualPreference('Queer')
    })

    it('Primary Filters - Sexual Preference "Bisexual"', () => {
        cy.filterPrimaryFilterSexualPreference('Bisexual')
    })

    it('Primary Filters - Sexual Preference "Pansexual"', () => {
        cy.filterPrimaryFilterSexualPreference('Pansexual')
    })

    // Primary Filters -> Gender

    it('Primary Filters - Gender "Male"', () => {
        cy.filterPrimaryFiltersGender('Male')
    })

    it('Primary Filters - Gender "Female"', () => {
        cy.filterPrimaryFiltersGender('Female')
    })

    it('Primary Filters - Gender "Transgender Male"', () => {
        cy.filterPrimaryFiltersGender('Transgender Male')
    })

    it('Primary Filters - Gender "Non-binary"', () => {
        cy.filterPrimaryFiltersGender('Non-binary')
    })

    it('Primary Filters - Gender "Gender Fluid"', () => {
        cy.filterPrimaryFiltersGender('Gender Fluid')
    })

    it('Primary Filters - Gender "Gender Natural"', () => {
        cy.filterPrimaryFiltersGender('Gender Natural')
    })

    // Primary Filters -> Ethinicity

    it('Primary Filters - Ethnicity "African American"', () => {
        cy.filterPrimaryFiltersEthnicity('African American')
    });

    it('Primary Filters - Ethnicity "North African"', () => {
        cy.filterPrimaryFiltersEthnicity('North African')
    });

    it('Primary Filters - Ethnicity "West African"', () => {
        cy.filterPrimaryFiltersEthnicity('West African')
    });

    it('Primary Filters - Ethnicity "East African"', () => {
        cy.filterPrimaryFiltersEthnicity('East African')
    });

    it('Primary Filters - Ethnicity "South African"', () => {
        cy.filterPrimaryFiltersEthnicity('South African')
    });

    it('Primary Filters - Ethnicity "Central African"', () => {
        cy.filterPrimaryFiltersEthnicity('Central African')
    });

    it('Primary Filters - Ethnicity "Caribbean"', () => {
        cy.filterPrimaryFiltersEthnicity('Caribbean')
    });

    it('Primary Filters - Ethnicity "East Asian"', () => {
        cy.filterPrimaryFiltersEthnicity('East Asian')
    });

    it('Primary Filters - Ethnicity "Southeast"', () => {
        cy.filterPrimaryFiltersEthnicity('Southeast')
    });

    it('Primary Filters - Ethnicity "Asian"', () => {
        cy.filterPrimaryFiltersEthnicity('Asian')
    });

    it('Primary Filters - Ethnicity "South Asian"', () => {
        cy.filterPrimaryFiltersEthnicity('South Asian')
    });

    it('Primary Filters - Ethnicity "White"', () => {
        cy.filterPrimaryFiltersEthnicity('White')
    });

    it('Primary Filters - Ethnicity "Middle Eastern"', () => {
        cy.filterPrimaryFiltersEthnicity('Middle Eastern')
    });

    it('Primary Filters - Ethnicity "American"', () => {
        cy.filterPrimaryFiltersEthnicity('American')
    });

    it('Primary Filters - Ethnicity "Indian"', () => {
        cy.filterPrimaryFiltersEthnicity('Indian')
    });

    it('Primary Filters - Ethnicity "Pacific Islander"', () => {
        cy.filterPrimaryFiltersEthnicity('Pacific Islander')
    });

    it('Primary Filters - Ethnicity "Hispanic"', () => {
        cy.filterPrimaryFiltersEthnicity('Hispanic')
    });

    it('Primary Filters - Ethnicity "Latino"', () => {
        cy.filterPrimaryFiltersEthnicity('Latino')
    });

    it('Primary Filters - Ethnicity "Mixed"', () => {
        cy.filterPrimaryFiltersEthnicity('Mixed')
    });

    it('Primary Filters - Ethnicity "Other"', () => {
        cy.filterPrimaryFiltersEthnicity('Other')
    });

    // Primary Filters -> Seeking

    it('Primary Filters - Seeking "Polyamorous Relationship"', () => {
        cy.filterPrimaryFiltersSeeking('Polyamorous Relationship')
    });

    it('Primary Filters - Seeking "Long-Term Relationship"', () => {
        cy.filterPrimaryFiltersSeeking('Long-Term Relationship')
    });

    it('Primary Filters - Seeking "Casual Dating"', () => {
        cy.filterPrimaryFiltersSeeking('Casual Dating')
    });

    it('Primary Filters - Seeking "Networking"', () => {
        cy.filterPrimaryFiltersSeeking('Networking')
    });

    it('Primary Filters - Seeking "New Friends"', () => {
        cy.filterPrimaryFiltersSeeking('New Friends')
    });
})