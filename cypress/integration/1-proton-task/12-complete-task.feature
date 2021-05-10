Feature: the app should allow me to mark a task as completed

    - As a:        user with tasks to do
    - I want to:   mark them as done
    - In order to: follow up my work

    Scenario: complete a task

      Given  the list with an undone task
      When  I click on the _check box_
      Then should not appear on the _Things to do_ list
      And should appear on the _Things done_ list

