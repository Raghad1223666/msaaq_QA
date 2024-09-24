import { Given } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import CourseActions from "../../../../pageObjects/course/sharedActions";
import QuizActions from "../../../../pageObjects/quiz/actions";

const sharedAction = new SharedActions();
const courseAction = new CourseActions();
const quizAction = new QuizActions();
let courseTitle: string;
let sectionTitle: string;
let fileTitle: string;
let quizTitle: string;
const tenantWebsiteUrl: string = "https://19-sep-e2e-assignment.msaaqdev.com/";
const quizSummary: string = "brief summary of the Quiz.";

before(() => {
  /* 
  Before running the Quiz Details test case - Preconditions:
  Create Course, Add Quiz
  Actually, we would use the API to automate the course and quiz creation 
  as part of the setup process for this test, 
  but I didn't have the API documentation.
*/
  sharedAction.visitUrl("/");
  sharedAction.changeTheLanguage("English");
  sharedAction.waitSeconds(3000);
  sharedAction.loginMsaaqDashboard();
  sharedAction.waitSeconds(3000);
  sharedAction.clickContentItemInSidebar();
  sharedAction.clickCoursesItemFromContentList();

  courseTitle = sharedAction.randomName("Course");
  Cypress.env("courseTitleValue", courseTitle);

  sectionTitle = sharedAction.randomName("Section");
  Cypress.env("sectionTitleValue", sectionTitle);

  fileTitle = sharedAction.randomName("File");
  //Create Course
  courseAction.createNewCourse(courseTitle, sectionTitle, fileTitle);
  cy.reload();

  quizTitle = sharedAction.randomName("quiz");
  Cypress.env("quizTitleValue", quizTitle);
  //Add Quiz
  quizAction.addQuizToCourse(courseTitle, sectionTitle, quizTitle, quizSummary);
  sharedAction.waitSeconds(500);
});

Given("Navigate to the Tenant Website", () => {
  sharedAction.visitUrl(tenantWebsiteUrl);
  sharedAction.waitSeconds(2000);
});

Given("Login to the Tenant Website", () => {
  sharedAction.loginToTenantWebsite();
  sharedAction.waitSeconds(2000);
});
