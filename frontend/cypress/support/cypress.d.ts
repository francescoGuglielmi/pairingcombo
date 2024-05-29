/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to mount Vue component.
     * @example cy.mount(MyComponent)
     */
    mount: typeof import('cypress/vue').mount;

    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.getByCy('greeting')
     */
    getByCy(selector: string, ...args: any[]): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.getByCy('greeting')
     */
    getByClass(selector: string, ...args: any[]): Chainable<JQuery<HTMLElement>>;
  }
}