// <reference types= "Cypress" />

import ElementsAccess from '../elements';
const acessaElements = new ElementsAccess();

class PageAccess {
  siteAccess() {
    cy.visit('/');
  }

  // To make login
  toClickButtonLogin() {
    cy.get(acessaElements.loginButton()).click({ force: true });
  }

  // To input email
  toInputEmail(Email) {
    cy.get(acessaElements.inputEmail()).type(Email);
  }

  // To input password
  toInputPassword(Password) {
    cy.get(acessaElements.inputPassword()).type(Password);
  }

  // To click the button to end
  toClickButtonEnd() {
    cy.get(acessaElements.button()).click();
  }

  // To scroll
  toScroll() {
	  cy.scrollTo(250, 250);
  }

  // To select after scroll
  toAfterToScrollToSelect() {
	cy.get('css-wuo9gr ewqvguk0').type('Nep');
  }

  // To select "Selector"
  toSelect() {
	cy.get(acessaElements.clickSelector()).click();
  }

  // To checkin and checkout
  toCheck() {
    cy.get(acessaElements.checkinCheckout()).click().click();
  }

  // To add guest
  toAddGuest() {
    cy.get(acessaElements.guest()).click();
  }
}

export default PageAccess;
