import { Then } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../../pageObjects/shared/actions";

const sharedAction = new SharedActions();

Then(
  "Another a danger alert appeared with the error message {string}",
  (errorMsg: string) => {
    cy.get("[role=alert]").eq(2).should("contain", errorMsg);
  }
);

Then(
  "Also Another a danger alert appeared with the error message {string}",
  (errorMsg: string) => {
    cy.get("[role=alert]").eq(4).should("contain", errorMsg);
  }
);
