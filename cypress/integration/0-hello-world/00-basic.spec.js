describe('Visiting the url https://labsademy.github.io/ProtonTasks/', () => {
  it('should have _ProtonTasks_ on its title', () => {
    cy.visit('https://labsademy.github.io/ProtonTasks/');
    cy.title().should('include', 'ProtonTasks');
  });
});
