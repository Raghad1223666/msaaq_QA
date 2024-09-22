import { When, Then, After } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../../pageObjects/shared/actions";
import SharedAssertions from "../../../../../pageObjects/shared/assertions";

const sharedAction = new SharedActions();
const sharedAssertion = new SharedAssertions();

When(
  "Type the Course title {string} in the Title input field within the Add Course popup",
  (courseTitle: string) => {
    sharedAction.waitSeconds(500);
    sharedAction.typeInTitleInput(courseTitle);
  }
);

Then(
  "The course should not be added, An error message should be displayed saying {string}",
  (errorMsg: string) => {
    sharedAction.waitSeconds(2000);
    sharedAssertion.checkAlertContainMessage(errorMsg);
    sharedAction.clickOnCancelButton();
    sharedAction.navigateToHome();
  }
);
