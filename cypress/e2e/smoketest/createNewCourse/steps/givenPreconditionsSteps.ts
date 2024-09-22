import { Given } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";

const sharedAction = new SharedActions();

Given("The dashboard user navigated to Msaaq website", () => {
  sharedAction.visitUrl("/");
  sharedAction.changeTheLanguage("English");
  sharedAction.waitSeconds(3000);
});

Given("Dashboard User login to the Msaaq website", () => {
  sharedAction.loginMsaaqDashboard();
});
