import { Home } from '../../support/pages/home';
const homePage = new Home();
describe('GIVEN: the app calls an endpoint', () => {
  describe('WHEN: a request is sent', () => {
    before(() => {
      const slowApiUrl = 'https://api-base-21.herokuapp.com/api/pub/projects';
      cy.intercept(slowApiUrl).as('slowApi');
    });
    it('THEN: should wait for it', () => {
      homePage.visit();
      // API alias
      cy.wait('@slowApi');
      cy.contains('Mis Proyectos');
    });
  });
});
