class CourseAssertions {
  checkUrlEqualValue(url: string) {
    cy.url().should("contain", url);
    return this;
  }

  checkSuccessPopupContainMessage(msg: string) {
    cy.get(".ms-modal-body p").first().should("contain", msg);
    return this;
  }

  checkThatPublishedCourseContainExpectedTitle(courseTitle: string) {
    cy.get(".abjad-card-header h1").should("have.text", courseTitle);
    return this;
  }
}

export default CourseAssertions;
