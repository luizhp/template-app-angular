const MAIN_TITLE = 'template-app-angular app is running!';

describe('Main Page UI', () => {
  it('Should return true when title component was correct', () => {
    cy.visit('/');

    cy.contains(MAIN_TITLE).should('have.length', 1);
  });

  it('Should return true when title component was correctly located', () => {
    cy.visit('/');

    cy.get('[data-cy=main-title]')
      .contains(MAIN_TITLE)
      .should('have.length', 1);
  });
});
