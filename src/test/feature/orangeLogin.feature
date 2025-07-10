# Feature: OrangeHRM Login

#   @Login
#   Scenario Outline: Login with different credentials
#     Given User launches OrangeHRM site "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
#     When User enters "<username>" and "<password>"
#     And Clicks on the Login button
#     Then Verify the login result as "<loginResult>"

#     Examples:
#       | username    | password    | loginResult     |
#       | Admin       | admin123    | valid login     |
#       | InvalidUser | wrongpass   | invalid login   |
#       |             | wrongpass   | empty login     |



Feature: OrangeHRM Login

  @Login
  Scenario Outline: Login with different credentials
    Given User launches OrangeHRM site
    When User enters "<username>" and "<password>"
    And Clicks on the Login button
    Then Verify the login result as "<loginResult>"

    Examples:
      | username    | password    | loginResult     |
      | Admin       | admin123    | valid login     |
      | InvalidUser | wrongpass   | invalid login   |
      |             | wrongpass   | empty login     |
