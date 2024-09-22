import { Then, After } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../../pageObjects/shared/actions";
import CourseActions from "../../../../../pageObjects/course/actions";

const courseAction = new CourseActions();
const sharedAction = new SharedActions();

Then(
  "The course publishing process fails and a danger alert appeared with the error message {string}",
  (errorMsg: string) => {
    sharedAction.waitSeconds(3000);
    cy.get("[role=alert]").eq(5).should("contain", errorMsg);
  }
);

After({ tags: "@TC3 or @TC4" }, () => {
  courseAction.deleteLastCourseAdded();
  sharedAction.navigateToHome();
});
