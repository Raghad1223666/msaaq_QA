import SharedActions from "../shared/actions";
import { QuizInfo, QuestionDetails } from "../../support/interfaces";

const sharedAction = new SharedActions();

class QuizActions {
  clickOnQuizButton() {
    cy.contains(/^Quiz$/).click();
  }

  //Adds a multiple choice question to a quiz
  addMultipleChoiceQuestion(questionDetails: QuestionDetails) {
    let { questionText, options, correctOptionNumber } = questionDetails;
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
  addQuizToCourse(quizInformation: QuizInfo) {
    let { courseTitle, sectionTitle, quizTitle, quizSummary } = quizInformation;

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
        let questionText = data.questions[index].question;
        let options: string[] = [...data.questions[index].options];
        this.addMultipleChoiceQuestion({
          questionText,
          options,
          correctOptionNumber: 1,
        });
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
