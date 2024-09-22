import { When } from "@badeball/cypress-cucumber-preprocessor";
import CoursesActions from "../../../../pageObjects/course/actions";

const coursesActions = new CoursesActions();

When("Click on the Content item in the sidebar", () => {
  coursesActions.clickContentItemInSidebar();
});

When("Click on the Courses item from the Content list", () => {
  coursesActions.clickCoursesItemFromContentList();
});
