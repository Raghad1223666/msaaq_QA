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

  clickAddNewButton() {
    cy.get("[type=submit]").click();
  }

  choosePublishOption() {
    cy.get("#status_published").click();
  }

  clickGoToTheCourseButton() {
    cy.contains("Go to the course").click();
  }

  clickSaveAndContinueButton() {
    cy.contains("Save and continue").click();
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
