[![Build Status](https://travis-ci.org/saifulss/todo-app.svg?branch=master)](https://travis-ci.org/saifulss/todo-app)

## References

Section to be updated as we run through "pin-worthy" reference material through the weeks.

- For Git commit message guidance: [this article](https://chris.beams.io/posts/git-commit/#imperative)

## Roadmap

- ~~Roll out the app using create-react-app with TS~~
- ~~Public repo on GitHub~~
- ~~.gitignore~~
- ~~Integrate Travis CI~~
- ~~Configure eslint~~
- ~~husky~~
- ~~lint-staged~~
- ~~Jest code coverage~~
- ~~Travis build badge~~
- Coveralls code coverage badge
- react-testing-library
- react-router
- history
- redux
- redux-actions-helper
- redux-thunk
- immer
- e2e testing (Cypress?)
- TDD

## Video Recordings
You can find the uploaded video recordings at this [YouTube playlist](http://bit.ly/farful-weekly-dev-wednesdays).

## Acceptance Criteria (whole app level)
- AC1:
Given I just visited the home URL of the app
When the app loads
Then I should see the entire list of todo items to my name

- AC2:
Given I am at the home screen of the app
When I look at the bottom and fill up the input field and hit submit
Then I should see a new item added to the top of the list

- AC3:
Given I am looking at a todo item at the home screen
When I click the cross button on the item
Then I should see the item disappear from the list on screen