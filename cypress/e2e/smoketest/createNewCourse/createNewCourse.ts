import {
  Given,
  When,
  Then,
  After,
} from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../pageObjects/shared/actions";
import CoursesActions from "../../../pageObjects/course/actions";
import CoursesAssertions from "../../../pageObjects/course/assertions";

const sharedAction = new SharedActions();
const coursesActions = new CoursesActions();
const coursesAssertion = new CoursesAssertions();
const coursesPageTenantWebsite: string =
  "https://19-sep-e2e-assignment.msaaqdev.com/courses";
let courseTitle: string;

Given("The dashboard user navigated to Msaaq website", () => {
  sharedAction.visitUrl("/");
  sharedAction.changeTheLanguage("English");
  sharedAction.waitSeconds(3000);
});

Given("Dashboard User login to the Msaaq website", () => {
  sharedAction.loginMsaaqDashboard();
});

When("Click on the Content item in the sidebar", () => {
  coursesActions.clickContentItemInSidebar();
});

When("Click on the Courses item from the Content list", () => {
  coursesActions.clickCoursesItemFromContentList();
});

When("Click on the Create course Button", () => {
  sharedAction.waitSeconds(3000);
  coursesActions.clickCreateCourseButton();
  sharedAction.waitSeconds(3000);
});

When(
  "Type the Course title in the Title input field within the Add Course popup",
  () => {
    sharedAction.waitSeconds(3000);
    courseTitle = sharedAction.randomName("Course");
    sharedAction.typeInTitleInput(courseTitle);
  }
);

When("Click on the Add new Button", () => {
  coursesActions.clickAddNewButton();
});

When(
  "Click on the Add section to course Button in the Course builder Tab",
  () => {
    sharedAction.waitSeconds(3000);
    coursesActions.clickAddSectionToCourseButton();
  }
);

When(
  "Type the Section title in the Title input field within the Add section popup",
  () => {
    sharedAction.waitSeconds(2000);
    sharedAction.typeInTitleInput(sharedAction.randomName("Section"));
  }
);

When("Click on the PDF file to add educational materials to section", () => {
  sharedAction.waitSeconds(2000);
  coursesActions.clickPdfFileButton();
});

When("Type the File title", () => {
  coursesActions.typeFileTitle(sharedAction.randomName("File"));
});

When("Upload the File", () => {
  sharedAction.waitSeconds(2000);
  coursesActions.uploadFile("./testData/Sdlc.pdf");
});

When("Click on the Save and continue Button", () => {
  sharedAction.waitSeconds(4000);
  coursesActions.clickSaveAndContinueButton();
});

When("Click on the Course settings Tab", () => {
  sharedAction.waitSeconds(2000);
  coursesActions.clickCourseSettingsTab();
});

When("Select Instructors from list", () => {
  coursesActions.selectInstructorsFromList();
});

When("Enter Estimated time to complete the course", () => {
  coursesActions.enterEstimatedTime(30);
});

When("Select the appropriate course category", () => {
  coursesActions.selectAppropriateCourseCategory();
});

When("Click on the Student interaction Tab", () => {
  sharedAction.waitSeconds(3000);
  coursesActions.clickStudentInteractionTab();
});

When("Enable Allow retesting switch", () => {
  sharedAction.waitSeconds(3000);
  //TODO
  coursesActions.enableAllowRetestingSwitch();
  coursesActions.enableAllowRetestingSwitch();
  coursesActions.enableAllowRetestingSwitch();
});

When("Click on the Save changes Button", () => {
  sharedAction.waitSeconds(3000);
  coursesActions.clickSaveChangesButton();
});

When("From Publishing Tab Choose Publish option", () => {
  sharedAction.waitSeconds(3000);
  coursesActions.choosePublishOption();
});

Then(
  "A success popup should appear displaying the message: {string}",
  (successMsg: string) => {
    sharedAction.waitSeconds(3000);
    coursesAssertion.checkSuccessPopupContainMessage(successMsg);
  }
);

When("Click on the Go to the course Button", () => {
  coursesActions.clickGoToTheCourseButton();
});

Then("The Courses page must be opened on the tenant's website", () => {
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
    coursesAssertion.checkThatPublishedCourseContainExpectedTitle(courseTitle);
  }
);

After(() => {
  coursesActions.deleteLastCourseAdded();
  sharedAction.navigateToHome();
});
