# LAB - Class 31

## Project: todo-app

### Author: Ryan Eastman

### Colloborators

- Ryan Gallaway
- Reece Renninger
- Ike Steoger

### Problem Domain  

Currently, a user can add todo tasks to the proof-of-life starter application. In this phase, we will add hard-wired, default context settings to the application so that the user can view three incomplete todo tasks. In addition, the user will have the option of viewing any additional incomplete tasks by using pagination functionality.

*Phase 1*: The goal for this lab is to incorporate configuration settings to the application. We will be using the React Context API to accomplish this task. The application will be able to read the number of items to display per screen from the context. In addition, the application will be able to read the current page number from the context. The application will also be able to update the current page number in the context. We’re going to perform some refactoring of a Todo application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

- Create a Detailed UML.
- Properly modularize the application into separate components, note the proposed file structure below.
- Implement the Context API to make some basic application settings available to components.
  - Show three items by default.
  - Hide completed items by default.
  - Add the sort word ‘difficulty’ by default.
- Style the application using the Mantine Component API{target:_blank}.
  - **NOTE**: The expectation to style this entire component in one day is likely unrealistic. The recommendation is to implement the required functionality, then systematically begin styling with Mantine. Match the comp image(s) as closely as possible. 80% of the design work will likely take 20% of your time. By the end of the week, being mostly there with style is the goal!

### Links and Resources

- [GitHub Actions ci/cd](http://xyz.com) (when applicable)
- [How to Use React Context API](https://www.freecodecamp.org/news/context-api-in-react/)
<!-- - [back-end server url](http://xyz.com) (when applicable)
- [front-end application](http://xyz.com) (when applicable) -->

### Collaborators

### Setup

1. Use Create React App (CRA) to create a new application named todo-app.
2. `npx create-react-app todo-app`
3. Delete the existing src directory.
4. Paste in the src directory from the lab/starter-code.
5. Run `npm install uuid sass`.
6. `npm start` and confirm that the application loads in the browser.
7. Create an EMPTY GitHub Repository named todo-app.
8. Follow GitHub instructions labeled “…or push an existing repository from the command line”.
**Note**: after completeing the above step, CRA starter code will have been pushed to your GitHub Repo.
9. Immediately ACP after adding your newly created repo to GitHub; this will add the starter-code to your repo and give you the option to rollback changes to the base starter code if necessary.
10. Create and work in a new branch for today called context-settings.

#### `.env` requirements (where applicable)

for now I have none and do not require one

#### How to initialize/run your application (where applicable)

1. Clone down the repo.
2. Initialize your application using `npm start`.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
- GET : `/hello` - specific route to hit

#### Tests

- How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc

#### UML

- **Lab 31: Phase 1**
- ![UML](./assets/lab31UML.png)
