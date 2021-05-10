// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addTask', inputTaskDescription => {
  const selectorFormInput = 'form > input';
  const selectorFormButton = 'form > button';
  const inputButtonText = 'Add task';
  cy.get(selectorFormInput).type(inputTaskDescription);
  cy.get(selectorFormButton).contains(inputButtonText).click();
});

Cypress.Commands.add('deleteTasks', () => {
  const selectorDeleteButtons = 'button.delete';
  cy.get(selectorDeleteButtons).each($el => $el.click());
});
