class SharedAssertions {
  checkAlertContainMessage(message: string) {
    cy.get("[role=alert]").should("contain", message);
  }

  checkErrorTextContainValue(errorMsg: string) {
    cy.get(".text-danger span").last().should("contain", errorMsg);
  }
}

export default SharedAssertions;
