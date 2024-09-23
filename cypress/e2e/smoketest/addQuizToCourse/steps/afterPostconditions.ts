import { After } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import CourseSharedActions from "../../../../pageObjects/course/sharedActions";

const sharedAction = new SharedActions();
const courseSharedAction = new CourseSharedActions();

After(() => {
  courseSharedAction.deleteLastCourseAdded();
  sharedAction.navigateToHome();
});
