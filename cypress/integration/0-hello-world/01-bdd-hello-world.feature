Feature: well formed html

    the app should have a well formd html
    - As a user
    - I want to view a web page
    - So i i can use it

    Scenario: I am visiten the home page

      Given the url  https://labsademy.github.io/ProtonTasks/
      When I visit it
      Then shoul have _Proton Tasks_ on Title
      And should have a header
