import sharedActions from "../shared/actions";
import AddSectionAndMaterialAction from "./addSectionAndMaterialActions";
import StudentInteractionTabActions from "./studentInteractionTabActions";
import CourseSettingsTabActions from "./courseSettingsTabActions";

const sharedAction = new sharedActions();
const addSectionAndMaterialAction = new AddSectionAndMaterialAction();
const studentInteractionTabAction = new StudentInteractionTabActions();
const courseSettingsTabAction = new CourseSettingsTabActions();
const coursesPageDashboardWebsite: string =
  "https://app.msaaqdev.com/en/courses";

class CourseActions {
  clickCreateCourseButton() {
    sharedAction.waitSeconds(3000);
    cy.contains("Create course").click();
    sharedAction.waitSeconds(3000);
  }

  choosePublishOption() {
    sharedAction.waitSeconds(1000);
    /*There is bug in the website here, 
      I had to click the switch multiple times
      for the save button to activate
   */
    cy.get("#status_published").click();
    cy.get("#status_draft").click();
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

  /* Create course -- to use it in the before hook for 
  Add Quiz test case and Quiz Details test case
  */
  createNewCourse(
    courseTitle: string,
    sectionTitle: string,
    fileTitle: string
  ) {
    this.clickCreateCourseButton();

    sharedAction.waitSeconds(500);

    sharedAction.typeInTitleInput(courseTitle);
    sharedAction.clickAddNewButton();
    sharedAction.waitSeconds(3000);

    addSectionAndMaterialAction.clickAddSectionToCourseButton();
    sharedAction.waitSeconds(1000);
    sharedAction.typeInTitleInput(sectionTitle);
    sharedAction.clickAddNewButton();
    sharedAction.waitSeconds(2000);

    addSectionAndMaterialAction.clickPdfFileButton();
    sharedAction.waitSeconds(2000);
    addSectionAndMaterialAction.typeFileTitle(fileTitle);
    addSectionAndMaterialAction.uploadFile("./testData/Sdlc.pdf");
    sharedAction.clickSaveAndContinueButton();

    sharedAction.waitSeconds(3000);
    courseSettingsTabAction.clickCourseSettingsTab();
    courseSettingsTabAction.selectInstructorsFromList();
    courseSettingsTabAction.enterEstimatedTime(30);
    courseSettingsTabAction.selectAppropriateCourseCategory();
    sharedAction.clickSaveAndContinueButton();

    sharedAction.waitSeconds(3000);
    studentInteractionTabAction.clickStudentInteractionTab();
    sharedAction.waitSeconds(2000);
    studentInteractionTabAction.enableAllowRetestingSwitch();
    studentInteractionTabAction.enableAllowRetestingSwitch();
    studentInteractionTabAction.enableAllowRetestingSwitch();
    sharedAction.clickSaveChangesButton();

    sharedAction.waitSeconds(3000);
    this.choosePublishOption();
    sharedAction.clickSaveChangesButton();
  }
}

export default CourseActions;
