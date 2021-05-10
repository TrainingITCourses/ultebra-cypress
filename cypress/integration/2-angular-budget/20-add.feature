Feature: add project

    add a new poject
    - As a:        user with ideas
    - I want to:   create a project
    - In order to: manage it


  Scenario: create a new project

    Given The form to create projects
    When  I type and submit the needed information
    Then  Should see it on the main page

