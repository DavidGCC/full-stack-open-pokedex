/// <reference types="Cypress" />

describe('Pokemon Page', () => {
  it('Pokemon page renders correctly', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
    cy.contains('ivysaur')
    cy.contains('Next').click()
    cy.contains('venusaur')
    cy.contains('Previous').click()
    cy.contains('ivysaur')
    cy.contains('Home').click()
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})