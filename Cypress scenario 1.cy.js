describe('Cypess scenario 1', function() {
    it("Practace code", function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.contains("Login")
        cy.get.contains('.orangehrm-login-branding')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        cy.wait(7000)
        cy.url("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    })
});