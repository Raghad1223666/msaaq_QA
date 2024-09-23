import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import CourseSettingsTabActions from "../../../../pageObjects/course/courseSettingsTabActions";

const sharedAction = new SharedActions();
const courseSettingsTabAction = new CourseSettingsTabActions();

When("Click on the Course settings Tab", () => {
  sharedAction.waitSeconds(2000);
  courseSettingsTabAction.clickCourseSettingsTab();
});

When("Select Instructors from list", () => {
  courseSettingsTabAction.selectInstructorsFromList();
});

When("Enter Estimated time to complete the course", () => {
  courseSettingsTabAction.enterEstimatedTime(30);
});

When("Select the appropriate course category", () => {
  courseSettingsTabAction.selectAppropriateCourseCategory();
});
