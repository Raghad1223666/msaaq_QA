class CourseAssertions {
  checkUrlEqualValue(url: string) {
    cy.url().should("contain", url);
  }

  checkSuccessPopupContainMessage(msg: string) {
    cy.get(".ms-modal-body p").first().should("contain", msg);
  }

  checkThatPublishedCourseContainExpectedTitle(courseTitle: string) {
    cy.get(".abjad-card-header h1").should("have.text", courseTitle);
  }
}

export default CourseAssertions;
