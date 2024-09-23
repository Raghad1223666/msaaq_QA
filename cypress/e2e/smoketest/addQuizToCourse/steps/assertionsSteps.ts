import { Then } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import QuizAssertions from "../../../../pageObjects/quiz/assertions";

const sharedAction = new SharedActions();
const quizAssertion = new QuizAssertions();
let quizTitle: string;

Then("The quiz should be successfully added and visible in the course", () => {
  sharedAction.waitSeconds(3000);
  quizTitle = Cypress.env("quizTitleValue");
  quizAssertion.checkCourseContainQuizTitle(quizTitle);
});
