import { When, Then, After } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import CoursesActions from "../../../../pageObjects/course/sharedActions";
import CoursesAssertions from "../../../../pageObjects/course/sharedAssertions";

const sharedAction = new SharedActions();
const courseAction = new CoursesActions();
const coursesAssertion = new CoursesAssertions();
const coursesPageTenantWebsite: string =
  "https://19-sep-e2e-assignment.msaaqdev.com/courses";
let courseTitle: string;

When("From Publishing Tab Choose Publish option", () => {
  sharedAction.waitSeconds(3000);
  courseAction.choosePublishOption();
});

Then(
  "A success popup should appear displaying the message: {string}",
  (successMsg: string) => {
    sharedAction.waitSeconds(3000);
    coursesAssertion.checkSuccessPopupContainMessage(successMsg);
  }
);

When("Click on the Go to the course Button", () => {
  courseAction.clickGoToTheCourseButton();
});

Then("The Courses page must be opened on the tenant's website", () => {
  courseTitle = Cypress.env("courseTitleValue");
  sharedAction.waitSeconds(3000);
  let fullCourseUrl = `${coursesPageTenantWebsite}/${sharedAction.formatCourseTitleForUrl(
    courseTitle
  )}`;
  coursesAssertion.checkUrlEqualValue(fullCourseUrl);
});

Then(
  "The course should be successfully published on the tenant's website, so the website should display the recently published course",
  () => {
    sharedAction.waitSeconds(2000);
    courseTitle = Cypress.env("courseTitleValue");
    coursesAssertion.checkThatPublishedCourseContainExpectedTitle(courseTitle);
  }
);

After({ tags: "@TC1" }, () => {
  courseAction.deleteLastCourseAdded();
  sharedAction.navigateToHome();
});
