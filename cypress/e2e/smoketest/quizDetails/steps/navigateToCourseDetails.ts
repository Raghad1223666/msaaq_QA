import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";

const sharedAction = new SharedActions();

When("Click on search icon from the header", () => {
  sharedAction.waitSeconds(2000);
  sharedAction.clickSearchIconButton();
});

When("Type course name in the search input field", () => {
  sharedAction.waitSeconds(2000);
  //TODO Back
  sharedAction.typeCourseNameInSearchInput("Course 15");
});

When("Click on the Search Button", () => {
  sharedAction.waitSeconds(2000);
  sharedAction.clickSearchButton();
});

//TODO Back
// When("Click on the Join now for free Button", () => {
//   sharedAction.waitSeconds(2000);
//   sharedAction.clickJoinNowForFree();
// });

// When("Click on the Buy for free Button", () => {
//   sharedAction.waitSeconds(2000);
//   sharedAction.clickBuyForFree();
// });

When("Click on the Follow the course Button", () => {
  sharedAction.waitSeconds(2000);
  sharedAction.clickFollowTheCourse();
});
