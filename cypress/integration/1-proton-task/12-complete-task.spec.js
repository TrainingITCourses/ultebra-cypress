describe(`GIVEN: the list with an undone task`, () => {
  const inputTaskDescription = 'Dummy task one';
  const selectorCompleteList = '#completed-tasks > li:first';
  const selectorIncompletesFirstCheck = '#incomplete-tasks > li:first > [type="checkBox"]';
  const selectorIncompleteList = '#incomplete-tasks ';
  const expectedTaskDescription = 'Dummy task one';
  before(() => {
    cy.visit(Cypress.env('baseUrl'));
    cy.addTask(inputTaskDescription);
  });
  context(`WHEN: I click on the _check box_`, () => {
    before(() => {
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

describe('Cuando tengo una tarea pendiente, quiero poder marcarla como hecha', () => {
  before(() => {
    cy.visit();
    cy.addTask('Bummy');
    cy.get(selectorIncompletesFirstCheck).click();
  });
  it('debería desaparecer de pendientes ', () => {
    cy.get(selectorIncompleteList).should('not.contain.text', expectedTaskDescription);
  });
  it('debería aparecer en completadas ', () => {
    cy.get(selectorCompleteList).should('contain.html', expectedTaskDescription);
  });
});
