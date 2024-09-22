import sharedActions from "../shared/actions";

const sharedAction = new sharedActions();

class CourseSettingsTabActions {
  clickCourseSettingsTab() {
    cy.contains("span", "Course settings").click();
  }

  selectInstructorsFromList() {
    sharedAction.waitSeconds(5000);
    cy.contains("Select from list").click({ force: true });
    sharedAction.waitSeconds(2000);
    cy.get("#react-select-8-option-0").click({ force: true });
  }

  enterEstimatedTime(hours: number) {
    cy.get("[name=hours]").type(`${hours}`);
  }

  selectAppropriateCourseCategory() {
    sharedAction.waitSeconds(2000);
    cy.contains("Select the appropriate course category").click({
      force: true,
    });
    sharedAction.waitSeconds(2000);
    cy.get("#react-select-13-option-0").click({ force: true });
  }
}

export default CourseSettingsTabActions;
