import { When, After } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import CoursesActions from "../../../../pageObjects/course/actions";

const sharedAction = new SharedActions();
const coursesActions = new CoursesActions();

When("Click on the Save and continue Button", () => {
  sharedAction.waitSeconds(4000);
  coursesActions.clickSaveAndContinueButton();
});

When("Click on the Add new Button", () => {
  coursesActions.clickAddNewButton();
});

When("Click on the Cancel and back Button", () => {
  sharedAction.clickCancelAndBackButton();
});
