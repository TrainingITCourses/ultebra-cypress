describe('GIVEN: the app uses an API', () => {
  describe('WHEN: make a get request', () => {
    it('THEN: should get an array with 1 or more items', () => {
      // API test
      cy.request('https://api-base-21.herokuapp.com/api/pub/projects/'.then(response => {
        expect(response.body).to.be.instanceOf(Array);
        expect(response.body).to.have.length.above(1);
      });
    });
  });
  describe('WHEN: make a delete request', () => {
    it('THEN: should get either a deleted or not found response', () => {
      // API test
      cy.request({
        method: 'DELETE',
        url: 'https://api-base-21.herokuapp.com/api/pub/projects/test-domination',
        failOnStatusCode: false,
        body: {},
      }).then(response => {
        expect(response.status).to.be.oneOf([204, 404]);
      });
    });
  });
});
