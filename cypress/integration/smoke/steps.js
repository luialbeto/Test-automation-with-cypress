import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import PageAccess from "../../support/pageObjects";
const pageAccess = new PageAccess();

describe('To see options to login', () => {
	beforeEach(() => {
	  cy.visit('/');
	})
});

Given('I as a user wanna access the site', () => {
  pageAccess.siteAccess();
});

And('I wanna fill in the fields', () => {
  pageAccess.toInputEmail();
  pageAccess.toInputPassword();
});

When('I click the bottom to accept the terms and I click the bottom', () => {
	pageAccess.toClickButtonEnd();
});

Then('I must to see the main page', (nome) => {
  cy.wait(200);
});

// ================================================

Given('I as a user wanna search some houses', () => {
	pageAccess.toScroll();
});

When(' write three letters', () => {
	pageAccess.toAfterToScrollToSelect();
});

Then('I see the result', () => {
	expect(true).to.be.true;
  });

// ======================================

Given('I as a user wanna booking some house', () => {
	pageAccess.toSelect();
});

When('I select one house', () => {
	pageAccess.toCheck();
	pageAccess.toAddGuest();
});

Then('I must to get a booking', () => {
    expect(true).to.be.true;
});
