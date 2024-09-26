import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import QuizActions from "../../../../pageObjects/quiz/actions";

const sharedAction = new SharedActions();
const quizAction = new QuizActions();
let sectionTitle: string;
let quizTitle: string;

When("Click on the Modify course Button", () => {
  sharedAction.waitSeconds(6000);
  sharedAction.clickModifyCourseButton();
});

When("Click on the section to expand the section", () => {
  sectionTitle = Cypress.env("sectionTitleValue");
  sharedAction.waitSeconds(6000);
  sharedAction.clickOnTheSection(sectionTitle);
});

When("Click on the Quiz Button from Add exercises and tests", () => {
  sharedAction.waitSeconds(500);
  quizAction.clickOnQuizButton();
});

When(
  "Type the Test title in the Title input field within the Add a test popup",
  () => {
    quizTitle = sharedAction.randomName("Quiz");
    sharedAction.waitSeconds(1000);
    sharedAction.typeInTitleInput(quizTitle);
    Cypress.env("quizTitleValue", quizTitle);
  }
);

When("Click on the Add new Button", () => {
  sharedAction.clickAddNewButton();
  sharedAction.waitSeconds(4000);
});

When("Click on the Add a question Button", () => {
  sharedAction.clickAddQuestion();
  sharedAction.waitSeconds(2000);
});

When(
  "Add question {int} and related options, correct option {int}",
  (questionNumber: number, correctOption: number) => {
    cy.fixture("./testData/quizQuestions").then((data) => {
      let questionText = data.questions[questionNumber - 1].question;
      let options: string[] = [...data.questions[questionNumber - 1].options];
      quizAction.addMultipleChoiceQuestion({
        questionText,
        options,
        correctOptionNumber: correctOption,
      });
    });
    sharedAction.waitSeconds(3000);
  }
);
