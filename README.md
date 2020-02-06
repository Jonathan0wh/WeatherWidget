# Simple Weather App (React Native) for PwC technical test

## Commands

| Command                                           | Note                                                                                   |
| ------------------------------------------------- | -------------------------------------------------------------------------------------- |
| yarn install                                      | install dependencies                                                                   |
| yarn start                                        | run Metro Bundler                                                                      |
| yarn ios [--simulator="{device name}"]            | install and run App in dev environment on iOS simulator or connected device            |
| yarn ios:staging [--simulator="{device name}"]    | install and run App in staging environment on iOS simulator or connected device        |
| yarn ios:production [--simulator="{device name}"] | install and run App in production environment on iOS simulator or connected device     |
| yarn android                                      | install and run App in dev environment on Android simulator or connected device        |
| yarn android:staging                              | install and run App in staging environment on Android simulator or connected device    |
| yarn android:production                           | install and run App in production environment on Android simulator or connected device |
| yarn test                                         | run all unit test cases                                                                |

> Note: Please run an Android simulator before installing App on Android using commands above

## Implemented Functionality

- [x] Ask for geolocation pemission, detect the geolocation of the user device, and show the current weather.

  > the 7-day weather forecast part is using local mock data, because it would cost \$49.99 to buy their 7-day forecast API access for live data.

  > But the current weather is using the live data from API, and components/redux files/test cases for both the current weather and the 7-day forecast are the same. Therefore it would already be enough to show my common design and development patterns and usage of components/redux/hooks/tests.

- [x] Accessible for screen readers
- [x] Pulls the location weather from an API [WeatherStack](https://weatherstack.com/)r for a list of public weather APIs that you could use)
- [x] Allows the user to switch between Imperial/Metric units
- [x] Allows the user to enter in a location name to look up

## Functionality Choices

- react-navigation for the drawer
- redux for global state management
- Components organised by functionality groups in align with data fragment in redux store
- different kinds of React hooks are widely used. All functional component, no class component
- consistent index.ts import and export: default import/export for Views/Components, named import/export for variables/redux related

## Dev Settings

- Bootstraped by React Native CLI _(btw, I like [Expo](https://expo.io/) very much as well)_
- React Native 0.61.5 with fast-refresh and auto-linking
- fully Typescript based
- eslint + prettier + husky + lint-staged to ensure coding style consistency in Github, and .editorconfig for local code preference
- react-native-config + three .env files for development, staging, production environment configs
- babel-plugin-module-resolver for Absolute Import
- jest + enzyme for unit tests and coverage tests based on snapshots and shallow rendered components
- redux dev tools for debugging in Chrome and React Native Debugger on port 8081
- I really recommmend Material Icon Theme for File Icon Theme if you are using VScode: this theme provides best support for reducer, action and store files in redux

## Notes

- the API KEY that I put in .env is a free key for showing the usage of this test project only. In actual development, no API KEY should be stored on the client side, and no .env file should be committed.
- **React Navigation** is the most popular solution for navigation in React native. While the [Official React Navigation](https://reactnavigation.org/docs/en/getting-started.html) was just updated to 5.x, providing much better support for Typescript, the [Official React Native Guide - React Navigation](https://facebook.github.io/react-native/docs/navigation) was still for **React Navigation** 4.x, which would cause problem because in **React Navigation** 5.x, many packages are separated. Please always follow the [Official React Navigation](https://reactnavigation.org/docs/en/getting-started.html) documentation if you want to use the latest **React Navigation** version in your project
- the JavaScript build-in Date constructor behaves differently when using React Native debugger (v8 engine) and when not using the debugger (React Native on-device JavaScript Engine), which is an edge case
