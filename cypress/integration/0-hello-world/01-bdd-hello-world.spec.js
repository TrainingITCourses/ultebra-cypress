describe(`GIVEN: the url  https://labsademy.github.io/ProtonTasks/`, () => {
  // Arrange
  const sutUrl = 'https://labsademy.github.io/ProtonTasks/';
  context(`WHEN: I visit it`, () => {
    // Act
    before(() => {
      cy.visit(sutUrl);
    });
    it(`THEN: should have _Proton Tasks_ on Title`, () => {
      // Assert
      const expected = 'Proton Tasks';
      cy.title().should('contain', expected);
    });
    it(`AND: should have a header`, () => {
      // Assert
      cy.get('header').should('exist');
    });
  });
});
