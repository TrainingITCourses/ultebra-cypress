Feature: the app should allow me to delete a task

    - As a:        user with tasks to do
    - I want to:   delete them
    - In order to: clean up unwanted tasks

    Scenario: delete a task

      Given the list with an undone task
      When  I click on the _delete button_
      Then should not appear on the _Things to do_ list
      And should not appear on the _Things done_ list

