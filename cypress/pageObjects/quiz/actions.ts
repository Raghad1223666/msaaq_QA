import SharedActions from "../shared/actions";
import CourseActions from "../course/sharedActions";
import AddSectionAndMaterialActions from "../course/addSectionAndMaterialActions";
import CourseSettingsTabActions from "../course/courseSettingsTabActions";
import StudentInteractionTabActions from "../course/studentInteractionTabActions";

const sharedAction = new SharedActions();
const courseAction = new CourseActions();
const addSectionAndMaterialAction = new AddSectionAndMaterialActions();
const courseSettingsTabAction = new CourseSettingsTabActions();
const studentInteractionTabAction = new StudentInteractionTabActions();

class QuizActions {
  clickOnQuizButton() {
    cy.contains(/^Quiz$/).click();
  }

  addMultipleChoiceQuestion(
    questionText: string,
    options: string[],
    correctOptionNumber: number
  ) {
    // Add the question text
    cy.get(".ContentEditable__root").eq(0).type(questionText);

    // Loop through the options and fill them
    options.forEach((option, index) => {
      if (index === 0) {
        // First option
        cy.get(".ContentEditable__root").eq(1).type(option);
      } else {
        // Second option
        cy.contains("Add option").click();
        cy.get(".ContentEditable__root").eq(2).type(option);
      }
    });

    // Select the correct answer
    cy.get(`[name='choices.${correctOptionNumber - 1}.credited']`).click();
    // Save The Question
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
}

export default QuizActions;
