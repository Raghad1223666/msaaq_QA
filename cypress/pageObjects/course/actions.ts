import sharedActions from "../shared/actions";

const sharedAction = new sharedActions();
const coursesPageDashboardWebsite: string =
  "https://app.msaaqdev.com/en/courses";

class CourseActions {
  clickContentItemInSidebar() {
    cy.contains("a", "Content").click();
  }

  clickCoursesItemFromContentList() {
    cy.contains("div", "Courses").click();
  }

  clickCreateCourseButton() {
    sharedAction.waitSeconds(3000);
    cy.contains("Create course").click();
    sharedAction.waitSeconds(3000);
  }

  enterEstimatedTime(hours: number) {
    cy.get("[name=hours]").type(`${hours}`);
  }

  clickAddNewButton() {
    cy.get("[type=submit]").click();
  }

  clickAddSectionToCourseButton() {
    cy.contains("Add section to course").click();
  }

  clickPdfFileButton() {
    cy.contains("PDF file").click();
  }

  typeFileTitle(fileTitle: string) {
    cy.get(
      "[placeholder='Enter file title that will be shown to students']"
    ).type(fileTitle);
  }

  uploadFile(filePath: string) {
    cy.get("[type=file]").attachFile(filePath);
  }

  clickSaveAndContinueButton() {
    cy.contains("Save and continue").click();
  }

  clickCourseSettingsTab() {
    cy.contains("span", "Course settings").click();
  }

  selectInstructorsFromList() {
    sharedAction.waitSeconds(5000);
    cy.contains("Select from list").click({ force: true });
    sharedAction.waitSeconds(2000);
    cy.get("#react-select-8-option-0").click({ force: true });
  }

  selectAppropriateCourseCategory() {
    sharedAction.waitSeconds(2000);
    cy.contains("Select the appropriate course category").click({
      force: true,
    });
    sharedAction.waitSeconds(2000);
    cy.get("#react-select-13-option-0").click({ force: true });
  }

  clickStudentInteractionTab() {
    cy.contains("Student interaction").click();
  }

  enableAllowRetestingSwitch() {
    cy.contains("Allow retesting").click();
  }

  clickSaveChangesButton() {
    cy.contains("Save changes").click();
  }

  choosePublishOption() {
    cy.get("#status_published").click();
  }

  clickGoToTheCourseButton() {
    cy.contains("Go to the course").click();
  }

  deleteLastCourseAdded() {
    cy.wait(5000);
    sharedAction.visitUrl(coursesPageDashboardWebsite);
    cy.wait(3000);
    //Last course added - In First row in Table
    cy.get("button[aria-haspopup=menu]").eq(3).click();
    cy.wait(1000);
    cy.contains("Delete course").click();
    cy.wait(1000);
    cy.get("#action-confirmed-checkbox").click();
    cy.contains("Confirm deletion").click();
  }
}

export default CourseActions;
