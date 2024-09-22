class StudentInteractionTabActions {
  clickStudentInteractionTab() {
    cy.contains("Student interaction").click();
  }

  enableAllowRetestingSwitch() {
    cy.contains("Allow retesting").click();
  }

  clickSaveChangesButton() {
    cy.contains("Save changes").click();
  }
}

export default StudentInteractionTabActions;
