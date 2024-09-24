import { After } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import CourseSharedActions from "../../../../pageObjects/course/sharedActions";

const sharedAction = new SharedActions();
const courseSharedAction = new CourseSharedActions();

After(() => {
  /*
  After the Quiz Details test case - Postconditions:
  Delete the course
  Actually, we would use the API to automate the course deletion
  but I didn't have the API documentation.
   */
  courseSharedAction.deleteLastCourseAdded();
  sharedAction.navigateToHome();
});
