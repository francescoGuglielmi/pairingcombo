import AboutText from './AboutText.vue'

describe('AboutText', () => {

  beforeEach(() => {
    cy.mount(AboutText);
  })

  it('has a headline text and a title', () => {
    cy.get('h2').should('contain','Pairing Made Easy')
    cy.getByClass('headline').should('exist')
  })

  it('has 3 cards containing features of Pairing Combo', () => {
    cy.getByClass('reason')
    .should('have.length', 3)
    .then((cards) => {
      cy.wrap(cards).eq(0).get('h3').should('contain', 'Easy To Use');
      cy.wrap(cards).eq(1).get('h3').should('contain', 'Save Time');
      cy.wrap(cards).eq(2).get('h3').should('contain', 'Built For Developers');
    });
  })
})