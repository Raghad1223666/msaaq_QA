import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import StudentInteractionTabActions from "../../../../pageObjects/course/studentInteractionTabActions";

const sharedAction = new SharedActions();
const studentInteractionTabAction = new StudentInteractionTabActions();

When("Click on the Student interaction Tab", () => {
  sharedAction.waitSeconds(3000);
  studentInteractionTabAction.clickStudentInteractionTab();
});

When("Enable Allow retesting switch", () => {
  sharedAction.waitSeconds(3000);
  /*There is bug in the website here, 
  I had to click the switch multiple times
   for the save button to activate
   */
  studentInteractionTabAction.enableAllowRetestingSwitch();
  studentInteractionTabAction.enableAllowRetestingSwitch();
  studentInteractionTabAction.enableAllowRetestingSwitch();
});
