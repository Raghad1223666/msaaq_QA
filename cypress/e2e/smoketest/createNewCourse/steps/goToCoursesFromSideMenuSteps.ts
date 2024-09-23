import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";

const sharedActions = new SharedActions();

When("Click on the Content item in the sidebar", () => {
  sharedActions.clickContentItemInSidebar();
});

When("Click on the Courses item from the Content list", () => {
  sharedActions.clickCoursesItemFromContentList();
});
