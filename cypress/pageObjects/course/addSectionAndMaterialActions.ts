class AddSectionAndMaterialActions {
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
}

export default AddSectionAndMaterialActions;
