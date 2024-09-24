import { Then, After } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../../pageObjects/shared/actions";
import CourseActions from "../../../../../pageObjects/course/sharedActions";

const courseAction = new CourseActions();
const sharedAction = new SharedActions();

Then(
  "The course publishing process fails and a danger alert appeared with the error message {string}",
  (errorMsg: string) => {
    sharedAction.waitSeconds(3000);
    cy.get("[role=alert]").eq(5).should("contain", errorMsg);
  }
);

/*
  After the Add Quiz test case - Postconditions:
  Delete the course
  Actually, we would use the API to automate the course deletion
  but I didn't have the API documentation.
   */
After({ tags: "@TC3 or @TC4" }, () => {
  courseAction.deleteLastCourseAdded();
  sharedAction.navigateToHome();
});
