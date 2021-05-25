import { ProjectsNew } from '../../support/pages/projects-new';
describe('GIVEN: a form linked to an API endpoint', () => {
  before(() => {
    const postApiUrl = 'https://api-base-21.herokuapp.com/api/pub/projects/';
    cy.intercept({
      method: 'POST',
      url: postApiUrl,
    }).as('postApiRequest');
  });
  describe('WHEN: the form is submitted', () => {
    before(() => {
      const projectsNewPage = new ProjectsNew();
      projectsNewPage.visit();
      projectsNewPage.nameInput.type('Catch Request');
      projectsNewPage.startInput.type('2021-05-21');
      projectsNewPage.endInput.type('2022-12-31');
      projectsNewPage.budgetInput.type(666);
      projectsNewPage.descriptionInput.type('Test the sent requests');
      projectsNewPage.submit();
    });
    it('THEN: should send data to the API', () => {
      //cy.wait('@postApiRequest').its('request.body').should('include.any.keys', 'title');
      //cy.wait('@postApiRequest').its('request.body.title').should('equal', 'Catch Request');

      cy.wait('@postApiRequest').then(intercept => {
        expect(intercept.request.body.budget).equal(666);
        expect(intercept.request.body.title).equal('Catch Request');
      });
    });
  });
});
