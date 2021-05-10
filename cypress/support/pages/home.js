export { Home };

class Home {
  get projectsList() {
    return cy.get(
      'body > ab-root > ab-layout > ab-main > main > ng-component > ab-article > article > main > main > section > aside:nth-child(1)'
    );
  }

  visit() {
    cy.visit('https://angularbuilders.github.io/angular-budget/');
  }
}
