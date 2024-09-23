import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import CoursesActions from "../../../../pageObjects/course/sharedActions";

const sharedAction = new SharedActions();
const coursesAction = new CoursesActions();
let courseTitleDraft: string;

When("Click on the Create course Button", () => {
  sharedAction.waitSeconds(3000);
  coursesAction.clickCreateCourseButton();
  sharedAction.waitSeconds(3000);
});

When(
  "Type the Course title in the Title input field within the Add Course popup",
  () => {
    sharedAction.waitSeconds(500);
    courseTitleDraft = sharedAction.randomName("Course");
    Cypress.env("courseTitleValue", courseTitleDraft);
    sharedAction.typeInTitleInput(courseTitleDraft);
  }
);
