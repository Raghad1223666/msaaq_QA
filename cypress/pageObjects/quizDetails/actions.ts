class QuizDetailsActions {
  private questionsArrangeFromQuiz: string[] = [];

  clickLastQuizFromSection() {
    cy.get(".abjad-collapse-content .abjad-card").last().click();
  }

  clickStartQuizButton() {
    cy.contains("ابدأ الاختبار").click();
  }

  // Store in the array the current arrangement of questions displayed in the quiz
  storeQuestionsArrangeFromQuiz = (
    currentQuestion: number,
    numberOfQuestions: number
  ): Cypress.Chainable<string[]> => {
    return cy
      .get(".abjad-card-body p span:first-child")
      .first()
      .invoke("text")
      .then((text) => {
        this.questionsArrangeFromQuiz.push(text.trim());

        if (currentQuestion === numberOfQuestions) {
          return cy.wrap(this.questionsArrangeFromQuiz);
        }
        return cy.wrap([]);
      });
  };

  // Check for arrangement
  // Check if the questions are rearranged compared to the original order
  checkAreQuestionsRearranged = (
    questionsFromQuiz: string[],
    originalQuestionsArrange: string[]
  ): boolean => {
    return !originalQuestionsArrange.every((question, index) => {
      const originalQuestion = question.trim().toLowerCase();
      const displayedQuestion = questionsFromQuiz[index]?.trim().toLowerCase();
      return originalQuestion === displayedQuestion;
    });
  };

  // Check Questions content, check if the questions in the current quiz are the same as the original
  areArraysEqual = (
    questionsFromQuiz: string[],
    originalQuestionsArrange: string[]
  ): boolean => {
    if (questionsFromQuiz.length !== originalQuestionsArrange.length)
      return false;

    const sortedQuizQuestions = [...questionsFromQuiz].sort();
    const sortedOriginalQuestions = [...originalQuestionsArrange].sort();

    return sortedQuizQuestions.every(
      (question, index) => question === sortedOriginalQuestions[index]
    );
  };

  clickOnTheOption(option: number) {
    cy.get("[type=radio]").eq(option).click();
  }

  clickSubmitAnswerButton() {
    cy.contains("تقديم الإجابة").click();
  }

  clickNextQuestionButton() {
    cy.contains("السؤال التالي").click();
  }

  clickQuizResultButton() {
    cy.contains("نتيجة الاختبار").click();
  }
}

export default QuizDetailsActions;
