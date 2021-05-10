Feature: the app should allow me to create new tasks

    - As a:        user with tasks to do
    - I want to:   create new tasks
    - In order to: follow up my work

    Scenario: add a task

      Given the form to add tasks
      When  I type task description and click on _Add task_
      Then should clear the input box
      And should appear on the _Things to do_ list

