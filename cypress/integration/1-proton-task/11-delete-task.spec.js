describe(`GIVEN: the list with an undone task`, () => {
  const inputTaskDescription = 'Dummy task one';
  const selectorIncompletesFirstDelete = '#incomplete-tasks > li:first > .delete';
  const selectorIncompleteList = '#incomplete-tasks ';
  const selectorCompleteList = '#completed-tasks';
  const expectedTaskDescription = 'Dummy task one';

  context(`WHEN: I click on the _delete button_`, () => {
    before(() => {
      cy.visit(Cypress.env('baseUrl'));
      cy.addTask(inputTaskDescription);
      cy.get(selectorIncompletesFirstDelete).click();
    });

    it(`THEN: should not appear on the _Things to do_ list`, () => {
      cy.get(selectorIncompleteList).should('not.contain.text', expectedTaskDescription);
    });
    it(`AND THEN: should not appear on the _Things done_ list`, () => {
      cy.get(selectorCompleteList).should('not.contain.html', expectedTaskDescription);
    });
  });
});
