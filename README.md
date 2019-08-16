## CET Carbon Planner

This is a React web app commissioned by CET, with the purpose of providing a means of planning trips or meetings and making priority changes based on carbon emission calculations and plots. Here follows a summary of some core concepts.

### `App`

The main component, keeps track of data, calls on subcomponents etc.

### `Survey`

The component which contains the process of registering some dataset, such as a trip or a meeting. A survey is basically a list of questions.

### `surveyData`

The object which contains the data such as question texts and types. There are four question types.

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

A component which takes a question from a s

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
