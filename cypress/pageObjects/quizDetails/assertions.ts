class QuizDetailsAssertions {
  checkRetestButtonVisibility() {
    cy.get(".abjad-card-footer [type=button]").should(
      "contain",
      "إعادة الاختبار"
    );
  }
}

export default QuizDetailsAssertions;
