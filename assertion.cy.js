
describe("Assertions", function()
{
  it("Learning assertion", function(){
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.contains('Login').click()
    cy.contains('Sauce Labs Backpack').click()
    cy.get('[data-test="add-to-cart"]')
    .should("contain", "Add to cart")
    .should("have.id", "add-to-cart")

  })  
})