import { Given } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import CourseActions from "../../../../pageObjects/course/sharedActions";

const sharedAction = new SharedActions();
const courseAction = new CourseActions();
let courseTitle: string;
let sectionTitle: string;
let fileTitle: string;

before(() => {
  cy.visit("/");
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
  courseAction.createNewCourse(courseTitle, sectionTitle, fileTitle);
  cy.reload();
});

Given("Navigate to the courses list page", () => {
  sharedAction.waitSeconds(5000);
  sharedAction.clickCoursesItemFromContentList();
});

Given("Navigate to the course page", () => {
  sharedAction.waitSeconds(6000);
  sharedAction.navigateToCourse(courseTitle);
});
