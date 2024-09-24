import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import QuizDetailsActions from "../../../../pageObjects/quizDetails/actions";

const sharedAction = new SharedActions();
const quizDetailsAction = new QuizDetailsActions();
let originalQuestionsArrange: string[] = [
  "Q1: Which testing type is performed to verify if the individual units or modules of the software work as expected?",
  "Q2: What is the primary goal of Software Quality Assurance (SQA)?",
  "Q3: Which testing technique involves testing the software's behavior against a set of input values?",
  "Q4: What is the purpose of a test plan?",
];

When("Click on the Quiz from section", () => {
  sharedAction.waitSeconds(4000);
  quizDetailsAction.clickLastQuizFromSection();
});

When("Click on the Start the Quiz Button", () => {
  sharedAction.waitSeconds(1000);
  quizDetailsAction.clickStartQuizButton();
});

When(
  "Choose the option {int} from Question {int}",
  (option: number, questionNumber: number) => {
    const numberOfQuestions = originalQuestionsArrange.length;

    // Store in the array the current arrangement of questions displayed in the quiz
    quizDetailsAction
      .storeQuestionsArrangeFromQuiz(questionNumber, numberOfQuestions)
      .then((questionsArrangeFromExam) => {
        // If the user is answering the last question,
        if (questionNumber === numberOfQuestions) {
          // Check for arrangement
          // Check if the questions are rearranged compared to the original order
          const areReArranged = quizDetailsAction.checkAreQuestionsRearranged(
            questionsArrangeFromExam,
            originalQuestionsArrange
          );
          Cypress.env("areReArrangedValue", areReArranged);
          // Check Questions content, check if the questions in the current quiz are the same as the original
          const areTwoArrayEquals = quizDetailsAction.areArraysEqual(
            questionsArrangeFromExam,
            originalQuestionsArrange
          );
          Cypress.env("areTwoArrayEqualsValue", areTwoArrayEquals);
        }
      });

    // Select the option for the current question.
    quizDetailsAction.clickOnTheOption(option - 1);
  }
);

When("Click on the Submit the answer Button", () => {
  quizDetailsAction.clickSubmitAnswerButton();
});

When("Click on the Next question Button", () => {
  quizDetailsAction.clickNextQuestionButton();
});

When("Click on the Quiz result Button", () => {
  quizDetailsAction.clickQuizResultButton();
});
