class SharedActions {
  waitSeconds(seconds: number): this {
    cy.wait(seconds);
    return this;
  }

  visitUrl(url: string): this {
    cy.visit(url);
    return this;
  }

  loginMsaaqDashboard(): this {
    cy.fixture("data").then((user) => {
      cy.loginToMsaaqDashboard(user.email, user.password);
      cy.wait(3000);
    });
    return this;
  }

  changeTheLanguage(language: string): this {
    if (language === "English") {
      cy.contains("English").click();
    } else {
      cy.contains("عربي").click();
    }

    return this;
  }

  randomName(itemTitle: string): string {
    const radomNumber = Math.floor(Math.random() * 100);
    return `${itemTitle} ${radomNumber}`;
  }

  typeInTitleInput(itemTitle: string): this {
    cy.get("[name=title]").type(itemTitle);
    return this;
  }

  //TODO:
  formatCourseTitleForUrl(title: string): string {
    return title.toLocaleLowerCase().replace(" ", "-");
  }
}

export default SharedActions;
