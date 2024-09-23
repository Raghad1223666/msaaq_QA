import { Given } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";

const sharedAction = new SharedActions();
const tenantWebsiteUrl: string = "https://19-sep-e2e-assignment.msaaqdev.com/";

before(() => {
  //TODO
});

Given("Navigate to the Tenant Website", () => {
  sharedAction.visitUrl(tenantWebsiteUrl);
  sharedAction.waitSeconds(2000);
});

Given("Login to the Tenant Website", () => {
  sharedAction.loginToTenantWebsite();
  sharedAction.waitSeconds(2000);
});
