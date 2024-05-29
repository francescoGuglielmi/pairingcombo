/// <reference types="cypress" />

import '@testing-library/cypress/add-commands';
import { mount } from 'cypress/vue';

Cypress.Commands.add('getByCy', (selector: string, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});

Cypress.Commands.add('getByClass', (selector: string, ...args) => {
  return cy.get(`[class=${selector}]`, ...args);
})

Cypress.Commands.add('mount', mount);