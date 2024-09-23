import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";

const sharedAction = new SharedActions();
const tenantWebsiteUrl: string = "https://19-sep-e2e-assignment.msaaqdev.com/";

When("Navigate to the Tenant Website", () => {
  sharedAction.visitUrl(tenantWebsiteUrl);
  sharedAction.waitSeconds(2000);
});

When("Login to the Tenant Website", () => {
  sharedAction.loginToTenantWebsite();
  sharedAction.waitSeconds(2000);
});
