# Interview Scheduler


## Description

Single Page Application built using React. Tracks student interviews, and allows user to create, edit, delete appointments. Users can choose weekdays and book in available appointment slots. Days track how many spots are appointment slot are available. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. Jest tests are used through the development of the project.

### Scheduler view, with Monday selected and hovering over Tuesday:

!["Scheduler view, with Monday selected and hovering over Tuesday"](https://github.com/keilamari/scheduler-app/blob/master/docs/scheduler-view-hover-day.png?raw=true)

### Form to create appointment: 

!["Form to create appointment"](https://github.com/keilamari/scheduler-app/blob/master/docs/create-appointment-form.png?raw=true)

### Appointment saving view

!["Appointment saving view"](https://github.com/keilamari/scheduler-app/blob/master/docs/saving-view.png?raw=true)

### Saved appointment

!["Saved appointment"](https://github.com/keilamari/scheduler-app/blob/master/docs/appointment-saved.png?raw=true)

### Confirmation to delete appointment

!["Confirmation to delete appointment"](https://github.com/keilamari/scheduler-app/blob/master/docs/appointment-delete.png?raw=true)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## API
Fork and clone the scheduler-api and follow the README.md instructions: `https://github.com/lighthouse-labs/scheduler-api`
For full functionality, run both API and client servers concurrently.

## Dependencies
Axios
Classnames
Cypress
Normalize.css
React
React-DOM
React-scripts
Babel/core
Storybook/addon-actions
Storybook/addon-backgrounds
Storybook/addon-links
Storybook/addons
Storybook/react
Testing-library/jest-dom
Testing-library/react
Testing-library/react-hooks
Babel-loader
Node-sass
Prop-types
React-test-renderer