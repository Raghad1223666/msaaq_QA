Feature: Create a new quiz functionality

    @happyPath # HappyTestCase
    Scenario: Happy Scenario - Validate that a dashboard user can successfully add a new quiz to the course
        # Implementation in the givenPreconditionsSteps.ts file
        Given Navigate to the courses list page
        And Navigate to the course page

        # Implementation in the addQuizQuestions.ts
        When Click on the Modify course Button
        And Click on the section to expand the section
        And Click on the Quiz Button from Add exercises and tests
        And Type the Test title in the Title input field within the Add a test popup
        And Click on the Add new Button
        And Click on the Add a question Button
        And Add question 1 and related options, correct option 1
        And Click on the Add a question Button
        And Add question 2 and related options, correct option 2
        And Click on the Add a question Button
        And Add question 3 and related options, correct option 2
        And Click on the Add a question Button
        And Add question 4 and related options, correct option 1

        # Implementation in the quizSettingsTabSteps.ts
        And Click on the Quiz settings Tab
        And Type summary in the Quiz summary input field
        And Enable Arrange questions randomly switch
        And Click on the Save and continue Button
        And Click on the Confirm the change Button

        # Implementation in the loginToTenantWebsiteSteps.ts
        And Navigate to the Tenant Website
        And Login to the Tenant Website

        # Implementation in the navigateToCourseDetails.ts
        And Click on search icon from the header
        And Type course name in the search input field
        And Click on the Search Button
        And Click on the Join now for free Button
        And Click on the Buy for free Button
        And Click on the Follow the course Button

        # Implementation in the assertionsSteps.ts
        Then The quiz should be successfully added and visible in the course
