# LAB - Class 31, 32, 33, 34

## Project: todo-app

### Author: Ryan Eastman

### Problem Domain  

Currently, a user can add todo tasks to the proof-of-life starter application. In this phase, we will add hard-wired, default context settings to the application so that the user can view three incomplete todo tasks. In addition, the user will have the option of viewing any additional incomplete tasks by using pagination functionality.

**Phase 1**: The goal for this lab is to incorporate configuration settings to the application. We will be using the React Context API to accomplish this task. The application will be able to read the number of items to display per screen from the context. In addition, the application will be able to read the current page number from the context. The application will also be able to update the current page number in the context. We’re going to perform some refactoring of a Todo application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

- Create a Detailed UML.
- Properly modularize the application into separate components, note the proposed file structure below.
- Implement the Context API to make some basic application settings available to components.
  - Show three items by default.
  - Hide completed items by default.
  - Add the sort word ‘difficulty’ by default.
- Style the application using the Mantine Component API{target:_blank}.
  - *NOTE*: The expectation to style this entire component in one day is likely unrealistic. The recommendation is to implement the required functionality, then systematically begin styling with Mantine. Match the comp image(s) as closely as possible. 80% of the design work will likely take 20% of your time. By the end of the week, being mostly there with style is the goal!

**Phase 2**: The goal for this lab is to add the ability for the user to change the number of items displayed per screen. The user will also be able to change the current page number. The user will also be able to change the sort word. The user will also be able to change the sort order. The user will also be able to change the display of completed items.

- Add the ability for the user to change the number of items displayed per screen.
- Add the ability for the user to change the current page number.
- Add the ability for the user to change the sort word.
- Add the ability for the user to change the sort order.
- Add the ability for the user to change the display of completed items.

**Phase 3**: The goal for this lab is to add security and access controls to the application. In this final phase, we'll be requring that users be logged in, in order to do the items. Additionally, based on their user type, they will be allowed (or denied) to perform actions such as editing or deleting them.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/DocHolliday13x/todo-app/actions/)
- [CodeSandbox.io](https://codesandbox.io/p/github/DocHolliday13x/todo-app/main?workspaceId=2b93d989-3f5a-46b4-bace-66a3e373e930)
<!-- - [back-end server url](http://xyz.com) (when applicable)
- [front-end application](http://xyz.com) (when applicable) -->
- [How to Use React Context API](https://www.freecodecamp.org/news/context-api-in-react/)
- [Mantine Component API](https://mantine.dev/pages/getting-started/)

### Collaborators

- Ryan Gallaway
- Reece Renninger
- Ike Steoger
- Nick Mulaney

### Setup

**Phase 1**:

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

**Phase 2**:

1. Continue working in the same repository from the previous phase.
2. Create and work in a new branch for today called phase2.

**Phase 3**:

1. Continue working in the same repository from the previous phase.
2. Create and work in a new branch for today called phase3.
3. Extend the functionality of the application to require users to be logged in to perform actions such as editing or deleting items.

### Technical Requirements / Notes

**Phase 1**:
*Create a settings Context component that can define how our components should display elements to the User.*

1. Implement the React context API for defining settings across the entire application.
   - Create React Context for managing application display settings and provide this at the application level.
   - Add the following defaults to the context provider’s state, they will not be changeable in this lab.
     - Display three items.
     - Hide completed items using a boolean.
     - Define “difficulty” as a default sort word to optionally use in the stretch goal.

2. Consume and utilize context values throughout your components.
   - Show a maximum of three items per screen by default in the `<List />` component.
   - Use the Mantine `<Pagination />` component to allow users to navigate a list of items.
   - Hide completed items in the list by default (the ability to show will be added in a later lab).

*Pagination Notes*:

- Only display the first `n` items in the list, where `n` is the default number three from your settings context.
  - If you have more than `n` items in the list, the `<Pagination />` component will add a button that, when clicked, will replace the list with the next `n.items` in the list.
  - The `<Pagination />` component will manage the “*previous*” and “*next*” buttons upon correct implementation.

**Phase 2**:

*Create a settings Context component that can define how our components should display elements to the User.*

1. Implement the React context API for defining settings across the entire application.
   - Create React Context for managing application display settings and provide this at the application level.
   - Add the following defaults to the context provider’s state, they will not be changeable in this lab.
     - Display three items.
     - Hide completed items using a boolean.
     - Define “difficulty” as a default sort word to optionally use in the stretch goal.

**Phase 3**:

*Technical requirements for the core application are unchanged from the prior phases, with the addition of an Authentication Context Provider and Components that consume the Context Values and Behaviors.*

1. Implement a Login/Auth React Context, “protect” the To Do application by restricting access to the various application features based on the users’ login status and capabilities.
   - Define a function that can simulate a login event.
     - Parameters: username and password as strings.
     - Sets a User on the auth context, and changes login status to true.
   - Define a function that can simulate a logout event.
     - Resets the User object and changes login status to `false.
   - Define a function that can authorize a User based on a capability.
     - Parameters: a capability as a string.
     - Returns a boolean whether the user has the capability parameter.

2. Create an `<Auth />` component with the following features:
   - Given a capability prop of type string, conditionally render components based on the user stored in context.
   - Hide the entire interface until the user has logged in.
   - Implements the following RBAC rules:
     - Logged In Users with ‘update’ permissions can click the records to mark them as complete.
     - Logged In Users with ‘create’ permissions can create new items.
     - Logged In Users with ‘delete’ permissions can delete items.
     - Logged In Users with ‘read’ permissions can see the list of To Do Items.

*Note: since only writers can ‘create’ and add new Todo items to state, in this lab, a person with read only access will not see any Todo items. This will change in the next lab once we populate Todo items from a database on page load.*

1. Implement a `<Login />` Component that has the following features:
   - Provide an account login screen with a form.
     - Accepts Username and Password.
     - On successful login, store the token as a cookie.
   - If a user returns and has a valid login cookie, hide the login form and consider them “Logged In”.
     - Display a logout button instead of a form if they are “Logged In”.

#### `.env` requirements (where applicable)

for now I have none and do not require one

#### How to initialize/run your application (where applicable)

1. Clone down the repo.
2. Initialize your application using `npm start`.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### How to use your library (where applicable)

- ![GIF](https://media.giphy.com/media/4no7ul3pa571e/giphy.gif)

#### Features / Routes

- `/` - Home Page
- `/settings` - Settings Page (not required for lab 31)

#### Tests

- How do you run tests?
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc

#### UML

- **Lab 31: Phase 1**
- ![UML](/public/lab31UML.png)

- **Lab 32: Phase 2**
- ![UML](/public/lab32UML.png)

- **Lab 33: Phase 3**
- ![UML](/public/lab33UML.png)
