import { Home } from '../../support/pages/home';
import { ProjectsNew } from '../../support/pages/projects-new';

const projectsNewPage = new ProjectsNew();
const homePage = new Home();

describe('GIVEN: The form to create projects', () => {
  before(() => {
    projectsNewPage.visit();
  });
  context('WHEN: I type and submit the needed information', () => {
    before(() => {
      // projectsNewPage.nameInput.type('Test domination');
      projectsNewPage.typeName('Test domination');
      projectsNewPage.startInput.type('2021-05-15');
      projectsNewPage.endInput.type('2021-09-11');
      projectsNewPage.budgetInput.type(99999);
      projectsNewPage.descriptionInput.type('Improve my testing skills');
      projectsNewPage.submit();
    });
    it('THEN: Should see it on the main page', () => {
      const expectedProjectTitle = 'Test domination';
      homePage.visit();
      homePage.projectsList.contains(expectedProjectTitle);
    });
  });
});
