describe(`GIVEN: the list with an undone task`, () => {
  const inputTaskDescription = 'Dummy task one';
  const selectorCompleteList = '#completed-tasks > li:first';
  const selectorIncompletesFirstCheck = '#incomplete-tasks > li:first > [type="checkBox"]';
  const selectorIncompleteList = '#incomplete-tasks ';
  const expectedTaskDescription = 'Dummy task one';
  context(`WHEN: I click on the _check box_`, () => {
    before(() => {
      cy.visit(Cypress.env('baseUrl'));
      cy.addTask(inputTaskDescription);
      cy.get(selectorIncompletesFirstCheck).click();
    });
    it(`THEN: should not appear on the _Things to do_ list`, () => {
      cy.get(selectorIncompleteList).should('not.contain.text', expectedTaskDescription);
    });
    it(`AND THEN: should appear on the _Things done_ list`, () => {
      cy.get(selectorCompleteList).should('contain.html', expectedTaskDescription);
    });
    after(() => {
      cy.deleteTasks();
    });
  });
});
