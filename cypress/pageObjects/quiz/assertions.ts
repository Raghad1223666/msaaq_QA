class QuizAssertions {
  checkCourseContainQuizTitle(quizTitle: string) {
    cy.get(".abjad-collapse-content .abjad-card")
      .last()
      .should("have.text", quizTitle);
  }
}

export default QuizAssertions;
