@Performance
Feature: Thoushika_10_JULY_2025_OrangeHRM_Performance

Background:
  Given the user launches the OrangeHRM site
  And logs in with valid credentials

@Trackers
Scenario Outline: Add a new performance tracker with reviewers
  When the user navigates to the Performance > Trackers page
  And adds a performance tracker with "<Tracker Name>", "<Employee Name>", and "<Reviewers>"
  Then the tracker "<Tracker Name>" should be successfully added

Examples:
  | Tracker Name | Employee Name | Reviewers  |
  | Sevvel       | Gayu R        | Thoushi F  |

@TrackersNegative
Scenario Outline: Add a tracker with invalid employee details
  When the user navigates to the Performance > Trackers page
  And adds a performance tracker with "<Tracker Name>", "<Employee Name>", and "<Reviewers>"
#   And clicks the Save button
  Then the system should display an error message "Required"

Examples:
  | Tracker Name | Employee Name | Reviewers  |
  | Sevvel       |               | Thoushi F  |
