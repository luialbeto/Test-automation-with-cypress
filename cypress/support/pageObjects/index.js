// <reference types= "Cypress" />

import ElementsAccess from '../elements';
const acessaElements = new ElementsAccess();
class PageAccess {
  siteAccess() {
    cy.visit('/');
	cy.wait(200);
  }

  // To make login
  toClickButtonLogin() {
    cy.get(acessaElements.loginButton()).click();
  }

  // To get login button
  toCheckExistsBookingButton() {
	cy.get(acessaElements.bookingButton()).should('be.visible');
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
	cy.get('#scrollable-content').scrollTo(0, 2500);
  }

  // To select after scroll
  toAfterToScrollToSelect() {
	cy.get('.e1464oba3 > .css-16lfj6j').click();
  }

  toAfterClicktoScrollToType() {
	  cy.get('.css-1l4pp6n').type('Pa');
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
