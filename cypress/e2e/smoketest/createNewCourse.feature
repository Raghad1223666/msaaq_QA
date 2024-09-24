Feature: Create a new course functionality

    Background: Visit the website
        Given The dashboard user navigated to Msaaq website
        And Dashboard User login to the Msaaq website

    @TC1 @happyPath # HappyTestCase
    Scenario: Happy Scenario - Validate that the Dashboard User can create a new course successfully
        # Implementation in the goToCoursesFromSideMenuSteps.ts file
        When Click on the Content item in the sidebar
        And Click on the Courses item from the Content list

        # Implementation in the addCourseDraftSteps.ts file
        And Click on the Create course Button
        And Type the Course title in the Title input field within the Add Course popup
        And Click on the Add new Button

        # Implementation in the addSectionAndMaterialSteps.ts file
        And Click on the Add section to course Button in the Course builder Tab
        And Type the Section title in the Title input field within the Add section popup
        And Click on the Add new Button
        And Click on the PDF file to add educational materials to section
        And Type the File title
        And Upload the File
        And Click on the Save and continue Button

        # Implementation in the courseSettingsTabSteps.ts file
        And Click on the Course settings Tab
        And Select Instructors from list
        And Enter Estimated time to complete the course
        And Select the appropriate course category
        And Click on the Save and continue Button

        # Implementation in the studentInteractionTab.ts file
        And Click on the Student interaction Tab
        And Enable Allow retesting switch
        And Click on the Save changes Button

        # Implementation in the HappyTestCaseAssertionsSteps.ts file
        And From Publishing Tab Choose Publish option
        And Click on the Save changes Button
        Then A success popup should appear displaying the message: "Great, your course has been publish successfully 🚀"
        When Click on the Go to the course Button
        Then The Courses page must be opened on the tenant's website
        And The course should be successfully published on the tenant's website, so the website should display the recently published course

    @TC2 @negative #invalidCourseTitleSteps
    Scenario: Negative Scenario - Validate that the course creation fails if the Course title is less than 3 characters
        # Implementation in the goToCoursesFromSideMenuSteps.ts file
        When Click on the Content item in the sidebar
        And Click on the Courses item from the Content list

        And Click on the Create course Button
        # Implementation in the negativeSteps/invalidCourseTitleSteps.ts file
        And Type the Course title "RR" in the Title input field within the Add Course popup
        And Click on the Add new Button
        Then The course should not be added, An error message should be displayed saying "The title must be at least 3 characters."

    @TC3 @negative #emptyFileUploadSteps.ts
    Scenario: Negative Scenario - Verify course publish without uploading file
        # Implementation in the goToCoursesFromSideMenuSteps.ts file
        When Click on the Content item in the sidebar
        And Click on the Courses item from the Content list

        # Implementation in the addCourseDraftSteps.ts file
        And Click on the Create course Button
        And Type the Course title in the Title input field within the Add Course popup
        And Click on the Add new Button

        # Implementation in the addSectionAndMaterialSteps.ts file
        And Click on the Add section to course Button in the Course builder Tab
        And Type the Section title in the Title input field within the Add section popup
        And Click on the Add new Button
        When Click on the PDF file to add educational materials to section
        And Type the File title
        And Click on the Save and continue Button

        # Implementation in the negativeSteps/emptyFileUploadSteps.ts file
        Then The File should not be added, An error message should be displayed saying "Field is required"
        When Click on the Cancel and back Button
        And Click on the Publishing Tab
        And From Publishing Tab Choose Publish option
        And Click on the Save and continue Button

        # Implementation in the negativeSteps/sharedAssertions.ts file
        Then The course publishing process fails and a danger alert appeared with the error message "You must add course content in order to update the course status and publish it."


    @TC4 @negative #emptyRequiredFieldsSteps
    Scenario: Negative Scenario - Verify course publish without filling most of the required fields
        # Implementation in the goToCoursesFromSideMenuSteps.ts file
        When Click on the Content item in the sidebar
        And Click on the Courses item from the Content list

        # Implementation in the addCourseDraftSteps.ts file
        And Click on the Create course Button
        And Type the Course title in the Title input field within the Add Course popup
        And Click on the Add new Button

        # Implementation in the addSectionAndMaterialSteps.ts file
        And Click on the Add section to course Button in the Course builder Tab
        And Type the Section title in the Title input field within the Add section popup
        And Click on the Add new Button
        And Click on the Publishing Tab
        And From Publishing Tab Choose Publish option
        And Click on the Save and continue Button
        # Implementation in the negativeSteps/sharedAssertions.ts file
        Then The course publishing process fails and a danger alert appeared with the error message "You must add course content in order to update the course status and publish it."

        # Implementation in the negativeSteps/emptyRequiredFieldsSteps.ts file
        And Another a danger alert appeared with the error message "You must choose a category in order to update the course status and publish it."
        And Also Another a danger alert appeared with the error message "You must choose course trainers in order to update the course status and publish it."