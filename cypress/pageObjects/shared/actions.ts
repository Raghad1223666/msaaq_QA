class SharedActions {
  waitSeconds(seconds: number) {
    cy.wait(seconds);
  }

  visitUrl(url: string) {
    cy.visit(url);
  }

  loginMsaaqDashboard() {
    cy.fixture("data").then((user) => {
      cy.loginToMsaaqDashboard(
        user.dashboardUserEmail,
        user.dashboardUserPassword
      );
      cy.wait(3000);
    });
  }

  loginToTenantWebsite() {
    cy.fixture("data").then((user) => {
      cy.loginToTenantWebsite(user.tenantEmail, user.tenantPassword);
      cy.wait(3000);
    });
  }

  changeTheLanguage(language: string) {
    if (language === "English") {
      cy.contains("English").click();
    } else {
      cy.contains("عربي").click();
    }
  }

  randomName(itemTitle: string): string {
    const radomNumber = Math.floor(Math.random() * 100);
    return `${itemTitle} ${radomNumber}`;
  }

  typeInTitleInput(itemTitle: string) {
    cy.get("[name=title]").type(itemTitle);
  }

  formatCourseTitleForUrl(title: string): string {
    return title.toLocaleLowerCase().replace(" ", "-");
  }

  navigateToHome() {
    cy.get("[alt=MSAAQ]").first().click();
  }

  clickOnCancelButton() {
    cy.contains("Cancel").click({ force: true });
  }

  clickCancelAndBackButton() {
    cy.contains("Cancel and back").click();
  }

  clickOnPublishingTab() {
    cy.contains("Publishing").click();
  }

  clickAddNewButton() {
    cy.get("[type=submit]").click();
  }

  clickSaveAndContinueButton() {
    cy.contains("Save and continue").click();
  }

  clickSaveChangesButton() {
    cy.contains("Save changes").click();
  }

  clickModifyCourseButton() {
    cy.contains("Modify course").click();
  }

  clickContentItemInSidebar() {
    cy.contains("a", "Content").click();
  }

  clickCoursesItemFromContentList() {
    cy.contains("div", "Courses").click();
  }

  clickAddQuestion() {
    cy.contains("Add a question").click();
  }

  clickConfirmChangeButton() {
    cy.contains("Confirm the change").click();
  }

  clickOnTheSection(sectionTitle: string) {
    cy.contains(sectionTitle).click();
  }

  navigateToCourse(courseTitle: string) {
    cy.contains(courseTitle).click();
  }

  clickSearchIconButton() {
    cy.get(".search-button").click();
  }

  clickSearchButton() {
    cy.contains("ابحث").click();
  }

  typeCourseNameInSearchInput(courseTitle: string) {
    cy.get("[aria-labelledby=search]").type(courseTitle);
  }

  clickJoinNowForFree() {
    cy.contains("انضم الآن مجانًا").click();
  }

  clickBuyForFree() {
    cy.contains("إتمام الشراء بشكل مجاني").click();
  }

  clickFollowTheCourse() {
    cy.contains("متابعة الدورة").click();
  }
}

export default SharedActions;
