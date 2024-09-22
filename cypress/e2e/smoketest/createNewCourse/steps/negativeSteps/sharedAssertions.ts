import { Then } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../../pageObjects/shared/actions";

const sharedAction = new SharedActions();

Then(
  "The course publishing process fails and a danger alert appeared with the error message {string}",
  (errorMsg: string) => {
    sharedAction.waitSeconds(3000);
    cy.get("[role=alert]").eq(5).should("contain", errorMsg);
    sharedAction.navigateToHome();
  }
);
