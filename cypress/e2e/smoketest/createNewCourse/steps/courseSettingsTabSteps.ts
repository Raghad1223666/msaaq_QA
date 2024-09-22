import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import CourseSettingsTabActions from "../../../../pageObjects/course/courseSettingsTabActions";

const sharedAction = new SharedActions();
const courseSettingsTabActions = new CourseSettingsTabActions();

When("Click on the Course settings Tab", () => {
  sharedAction.waitSeconds(2000);
  courseSettingsTabActions.clickCourseSettingsTab();
});

When("Select Instructors from list", () => {
  courseSettingsTabActions.selectInstructorsFromList();
});

When("Enter Estimated time to complete the course", () => {
  courseSettingsTabActions.enterEstimatedTime(30);
});

When("Select the appropriate course category", () => {
  courseSettingsTabActions.selectAppropriateCourseCategory();
});
