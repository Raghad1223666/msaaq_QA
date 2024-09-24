import SharedActions from "../shared/actions";

const sharedAction = new SharedActions();

class QuizActions {
  clickOnQuizButton() {
    cy.contains(/^Quiz$/).click();
  }

  //Adds a multiple choice question to a quiz
  addMultipleChoiceQuestion(
    questionText: string,
    options: string[],
    correctOptionNumber: number
  ) {
    cy.get(".ContentEditable__root").eq(0).type(questionText);

    options.forEach((option, index) => {
      if (index === 0) {
        cy.get(".ContentEditable__root").eq(1).type(option);
      } else {
        cy.contains("Add option").click();
        cy.get(".ContentEditable__root").eq(2).type(option);
      }
    });

    cy.get(`[name='choices.${correctOptionNumber - 1}.credited']`).click();

    sharedAction.clickSaveAndContinueButton();
    sharedAction.clickConfirmChangeButton();
  }

  clickQuizSettingsTab() {
    cy.contains("Quiz settings").click();
  }

  typeInQuizSummaryInput(text: string) {
    cy.get("[placeholder='Write a brief summary of the Quiz.']").type(text);
  }

  clickArrangeQuestionsRandomlySwitch() {
    cy.get(".abjad-toggler").eq(3).click();
  }

  // Add Quiz -- to use it in the before hook for Quiz Details test case
  addQuizToCourse(
    courseTitle: string,
    sectionTitle: string,
    quizTitle: string,
    quizSummary: string
  ) {
    sharedAction.waitSeconds(5000);
    sharedAction.clickCoursesItemFromContentList();
    sharedAction.waitSeconds(6000);
    sharedAction.navigateToCourse(courseTitle);
    sharedAction.waitSeconds(6000);
    sharedAction.clickModifyCourseButton();
    sharedAction.waitSeconds(6000);
    sharedAction.clickOnTheSection(sectionTitle);
    sharedAction.waitSeconds(500);
    this.clickOnQuizButton();

    sharedAction.waitSeconds(1000);
    sharedAction.typeInTitleInput(quizTitle);
    sharedAction.clickAddNewButton();
    sharedAction.waitSeconds(4000);

    cy.fixture("./testData/quizQuestions").then((data) => {
      data.questions.forEach((_, index) => {
        sharedAction.waitSeconds(5000);
        sharedAction.clickAddQuestion();
        sharedAction.waitSeconds(4000);

        this.addMultipleChoiceQuestion(
          data.questions[index].question,
          data.questions[index].options,
          1
        );
      });
    });
    sharedAction.waitSeconds(5000);

    this.clickQuizSettingsTab();
    sharedAction.waitSeconds(1000);

    this.typeInQuizSummaryInput(quizSummary);
    this.clickArrangeQuestionsRandomlySwitch();
    sharedAction.clickSaveAndContinueButton();
    sharedAction.clickConfirmChangeButton();
  }
}

export default QuizActions;
