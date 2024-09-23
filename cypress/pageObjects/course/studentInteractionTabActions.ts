class StudentInteractionTabActions {
  clickStudentInteractionTab() {
    cy.contains("Student interaction").click();
  }

  enableAllowRetestingSwitch() {
    cy.contains("Allow retesting").click();
  }
}

export default StudentInteractionTabActions;
