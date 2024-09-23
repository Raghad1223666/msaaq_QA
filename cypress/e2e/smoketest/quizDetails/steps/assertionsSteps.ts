import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(
  "The questions are displayed in a randomized order, Also each question's content matching what was added",
  () => {
    expect(Cypress.env("areReArrangedValue"), "Questions should be rearranged")
      .to.be.true;
    expect(
      Cypress.env("areTwoArrayEqualsValue"),
      "Questions should match original questions"
    ).to.be.true;
  }
);

Then("The Retest button becomes visible after the quiz is completed", () => {
  cy.get(".abjad-card-footer [type=button]").should(
    "contain",
    "إعادة الاختبار"
  );
});
