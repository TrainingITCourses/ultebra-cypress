describe(`GIVEN: the form to add tasks`, () => {
  const sutUrl = 'https://labsademy.github.io/ProtonTasks/';

  const selectorFormInput = '#new-task';
  const inputTaskDescription = 'Dummy task one';
  const selectorFormButton = 'form > button';
  const inputButtonText = 'Add task';
  const expectedTaskDescription = 'Dummy task one';
  const selectorIncompleteListLabel = '#incomplete-tasks > li:first-child > label';
  const selectorIncompleteListButton = '#incomplete-tasks > li:first-child > button.delete';
  before(() => {
    cy.visit(sutUrl);
  });
  context(`WHEN: I type a task description and click on _Add task_ `, () => {
    before(() => {
      cy.get(selectorFormInput).type(inputTaskDescription);

      // cy.get('#new-task').click();

      cy.get('form > button').contains('Add task').click();
    });
    it(`THEN: should clear the input box`, () => {
      cy.get(selectorFormInput).should('not.include.value');
    });
    it(`AND: should appear on the _Things to do_ list`, () => {
      cy.get(selectorIncompleteListLabel).should('contain', expectedTaskDescription);
    });
    after(() => {
      cy.get(selectorIncompleteListButton).click();
    });
  });
});
