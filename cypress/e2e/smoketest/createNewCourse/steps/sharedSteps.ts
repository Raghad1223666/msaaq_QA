import { When, After } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import CoursesActions from "../../../../pageObjects/course/sharedActions";

const sharedAction = new SharedActions();
const coursesActions = new CoursesActions();

When("Click on the Save and continue Button", () => {
  sharedAction.waitSeconds(4000);
  sharedAction.clickSaveAndContinueButton();
});

When("Click on the Add new Button", () => {
  sharedAction.clickAddNewButton();
});

When("Click on the Cancel and back Button", () => {
  sharedAction.clickCancelAndBackButton();
});

When("Click on the Save changes Button", () => {
  sharedAction.waitSeconds(3000);
  sharedAction.clickSaveChangesButton();
});
