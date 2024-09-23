import { When } from "@badeball/cypress-cucumber-preprocessor";
import SharedActions from "../../../../pageObjects/shared/actions";
import AddSectionAndMaterialActions from "../../../../pageObjects/course/addSectionAndMaterialActions";

const sharedAction = new SharedActions();
const addSectionAndMaterialAction = new AddSectionAndMaterialActions();

When(
  "Click on the Add section to course Button in the Course builder Tab",
  () => {
    sharedAction.waitSeconds(5000);
    addSectionAndMaterialAction.clickAddSectionToCourseButton();
  }
);

When(
  "Type the Section title in the Title input field within the Add section popup",
  () => {
    sharedAction.waitSeconds(1000);
    sharedAction.typeInTitleInput(sharedAction.randomName("Section"));
  }
);

When("Click on the PDF file to add educational materials to section", () => {
  sharedAction.waitSeconds(2000);
  addSectionAndMaterialAction.clickPdfFileButton();
});

When("Type the File title", () => {
  sharedAction.waitSeconds(2000);
  addSectionAndMaterialAction.typeFileTitle(sharedAction.randomName("File"));
});

When("Upload the File", () => {
  sharedAction.waitSeconds(2000);
  addSectionAndMaterialAction.uploadFile("./testData/Sdlc.pdf");
});
