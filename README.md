## CET Carbon Planner

This is a React web app commissioned by CET, with the purpose of providing a means of planning trips or meetings and making priority changes based on carbon emission calculations and plots. Here follows a summary of some core concepts.

### `App`

The main React component, keeps track of data, calls on subcomponents etc.

### `carbonmodel`

A JS function which contains the CO2 emissions data. Note that there are some terms defined twice here and and in Plot which have yet to be refactored to a "single source of truth" pattern.

### `Survey`

A React component which contains the process of registering some dataset, such as a trip or a meeting. A survey is basically a list of questions. Once the Survey is complete, it sends the answers back to App.

### `surveyData`

A JS object that defines the contents of a Survey, data such as question texts and types. There are four question types (string parameters):

#### "name"

This asks the user for the name of the trip. There is logic in the App which handles this question in
particular ways, for instance by letting it remain empty and filling in a default name.

#### "select"

A list of alternatives, from which the user selects one.

#### "quantity"

Asks the user to enter some number. The quantifier is what amount the number pertains to, for instance "hours" of travel time.

#### "quantityselect"

This combines the two above, so the user can create a list of answers, where each answer is
a combination of a quantity of an item selected from a list. An example is the travel question, where the user can for instance
enter 4 hours of flying, 10 hours of driving and 2 hours of bus to one journey.

### `Question`

A React component which takes a question from a Survey, and renders the appropriate text and user input elements. It sends each answer back to Survey.

### `Dataset`

A JS object which contains the answers from a survey. A new Survey is started with an empty Dataset containing a generated ID. If datasets are edited, new datasets are created using the same ID which overwrites the old, in order to provide immutable object behaviour which makes data handling safer and easier.

### `View`

This React component generates a list based on the stored datasets and triggers the drawing of a column diagram based on which datasets are selected by the user.

### `Plot`

This React component uses the React-Vis library to draw column diagrams.

### `Answertable`

A React component which draws a small table based on what the user has entered in a quantityselect question.

### `Settings`

A React component which generates a settings page for setting CO2 targets and file import/export.

### `Navbar`

The React component which serves the navigation bar on top of the page.

### `storage`

A set of JS functions pertaining to data storage, either by file reading/writing or browser localstorage. Future cloud integration should go here as well.

### `uuid`

A JS function which generates a universally unique ID for dataset identification. Note that there is no collision checking in place as of yet.

## The following is from the default React documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
