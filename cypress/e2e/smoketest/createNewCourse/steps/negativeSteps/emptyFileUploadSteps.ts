import { Then, When, After } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../../pageObjects/shared/actions";
import SharedAssertions from "../../../../../pageObjects/shared/assertions";

const sharedAction = new SharedActions();
const sharedAssertion = new SharedAssertions();

Then(
  "The File should not be added, An error message should be displayed saying {string}",
  (errorMsg: string) => {
    sharedAction.waitSeconds(2000);
    sharedAssertion.checkErrorTextContainValue(errorMsg);
  }
);

When("Click on the Publishing Tab", () => {
  sharedAction.waitSeconds(3000);
  sharedAction.clickOnPublishingTab();
});
