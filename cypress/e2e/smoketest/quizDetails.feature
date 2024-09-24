Feature: Check Quiz details

    @happyPath # HappyTestCase
    Scenario: Happy Scenario - Validate Quiz Details: Correct Question Content, Randomized Question Order, and Retest Option Visibility
        # Implementation in the givenPreconditionsSteps.ts
        Given Navigate to the Tenant Website
        And Login to the Tenant Website

        # Implementation in the navigateToCourseDetails.ts
        When Click on search icon from the header
        And Type course name in the search input field
        And Click on the Search Button
        And Click on the Join now for free Button
        And Click on the Buy for free Button
        And Click on the Follow the course Button

        # Implementation in the quizInteractionSteps.ts
        And Click on the Quiz from section
        And Click on the Start the Quiz Button
        And Choose the option 2 from Question 1
        And Click on the Submit the answer Button
        And Click on the Next question Button
        And Choose the option 1 from Question 2
        And Click on the Submit the answer Button
        And Click on the Next question Button
        And Choose the option 1 from Question 3
        And Click on the Submit the answer Button
        And Click on the Next question Button
        And Choose the option 2 from Question 4
        And Click on the Submit the answer Button
        And Click on the Quiz result Button

        # Implementation in the assertionsSteps.ts
        Then The questions are displayed in a randomized order, Also each question's content matching what was added
        And The Retest button becomes visible after the quiz is completed