import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import QuizActions from "../../../../pageObjects/quiz/actions";

const sharedAction = new SharedActions();
const quizAction = new QuizActions();

When("Click on the Quiz settings Tab", () => {
  quizAction.clickQuizSettingsTab();
  sharedAction.waitSeconds(1000);
});

When("Type summary in the Quiz summary input field", () => {
  quizAction.typeInQuizSummaryInput("brief summary of the Quiz.");
});

When("Enable Arrange questions randomly switch", () => {
  quizAction.clickArrangeQuestionsRandomlySwitch();
});

When("Click on the Save and continue Button", () => {
  sharedAction.clickSaveAndContinueButton();
});

When("Click on the Confirm the change Button", () => {
  sharedAction.clickConfirmChangeButton();
});
