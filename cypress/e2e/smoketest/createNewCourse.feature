Feature: Create a new course functionality

    Background: Visit the website
        Given The dashboard user navigated to Msaaq website
        And Dashboard User login to the Msaaq website

    Scenario: Validate that the Dashboard User can create a new course successfully
        When Click on the Content item in the sidebar
        And Click on the Courses item from the Content list
        And Click on the Create course Button
        And Type the Course title in the Title input field within the Add Course popup
        And Click on the Add new Button
        And Click on the Add section to course Button in the Course builder Tab
        And Type the Section title in the Title input field within the Add section popup
        And Click on the Add new Button
        And Click on the PDF file to add educational materials to section
        And Type the File title
        And Upload the File
        And Click on the Save and continue Button
        And Click on the Course settings Tab
        And Select Instructors from list
        And Enter Estimated time to complete the course
        And Select the appropriate course category
        And Click on the Save and continue Button
        And Click on the Student interaction Tab
        And Enable Allow retesting switch
        And Click on the Save changes Button
        And From Publishing Tab Choose Publish option
        And Click on the Save changes Button
        Then A success popup should appear displaying the message: "Great, your course has been publish successfully 🚀"
        When Click on the Go to the course Button
        Then The Courses page must be opened on the tenant's website
        And The course should be successfully published on the tenant's website, so the website should display the recently published course
