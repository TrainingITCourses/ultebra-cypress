describe('GIVEN: I have two projects', () => {
  before(() => {
    // API double
    const stubbedApiUrl = 'https://api-base-21.herokuapp.com/api/pub/projects';
    const fixtureData = { fixture: 'projects' };

    cy.intercept(stubbedApiUrl, fixtureData);
  });

  context('WHEN: I visit the projects page', () => {
    before(() => {
      const homeSpaUrl = 'https://angularbuilders.github.io/angular-budget';
      cy.visit(homeSpaUrl);
      cy.get('a').contains('Proyectos').click();
    });
    it('THEN: should show 2 items on the projects list', () => {
      const expectedListItemsLength = 2;
      const selectorListItems = 'tbody > tr';
      cy.get(selectorListItems).should('have.length', expectedListItemsLength);
    });
  });
});
