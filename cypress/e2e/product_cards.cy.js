describe('Product Cards', () => {
  it('should load the page and display product cards', () => {
    cy.visit('http://localhost:1234'); // ou o endereço onde seu projeto roda
    cy.get('[data-qa="product-card"]').should('have.length.at.least', 1);
  });
});
