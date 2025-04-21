describe('Products API Test', () => {
  it('Should fetch the list of products and verify the response', () => {
    cy.request('https://automationexercise.com/api/productsList')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('products')
        expect(response.body.products).to.be.an('array')
        expect(response.body.products.length).to.be.greaterThan(0)

        // Log first product to view in Cypress test runner
        cy.log(JSON.stringify(response.body.products[0]))
      })
  })
})
