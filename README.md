# Simple Weather App (React Native) for PwC technical test

## Screenshots

| Default                                                            | Drawer navigation with location input and Celsius/Farenheit switcher | Farenheit mode                                                     |
| ------------------------------------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------ |
| ![Screenshot 1](<./docs/Screen Shot 2020-02-09 at 4.33.00 am.png>) | ![Screenshot 2](<./docs/Screen Shot 2020-02-07 at 2.19.56 pm.png>)   | ![Screenshot 3](<./docs/Screen Shot 2020-02-09 at 4.33.24 am.png>) |

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
| yarn test:coverage                                | run all unit tests and produce the coverage report                                     |

> Note: Please run an Android simulator before installing App on Android using commands above

## Folder and File Structure

`Components/` folder contains all single-unit components.

`Components/shared/` folder contains all single-unit components that could be shared by multiple other components or views.

`Views/` folder contains all views/screens, and each view could be regarded as a "Feature Group" which might be composed by several components and use one single source of data (for example, one view and its component composition use one piece of state in redux store).

**This way of [grouping files by features or routes](https://reactjs.org/docs/faq-structure.html#grouping-by-features-or-routes) is more recommended by React official for large complicated commercial projects rather than [grouping files by file type](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type). Actually, both ways could be wisely used in large projects.**

Folder Tree:

```text
.
├── LICENSE
├── README.md
├── app.json
├── babel.config.js
├── coverage
├── index.ts
├── jest.config.js
├── metro.config.js
├── package.json
├── setupTests.js
├── src
│   ├── App.tsx
│   ├── Components
│   │   ├── CurrentWeatherAdditional
│   │   │   ├── CurrentWeatherAdditional.tsx
│   │   │   ├── __tests__
│   │   │   │   ├── CurrentWeatherAdditional.test.tsx
│   │   │   │   └── __snapshots__
│   │   │   │       └── CurrentWeatherAdditional.test.tsx.snap
│   │   │   └── index.ts
│   │   ├── CurrentWeatherMain
│   │   │   ├── CurrentWeatherMain.tsx
│   │   │   ├── __tests__
│   │   │   │   ├── CurrentWeatherMain.test.tsx
│   │   │   │   └── __snapshots__
│   │   │   │       └── CurrentWeatherMain.test.tsx.snap
│   │   │   └── index.ts
│   │   └── Shared
│   │       ├── ForecastDaily
│   │       │   ├── ForecastDaily.tsx
│   │       │   ├── __tests__
│   │       │   │   ├── ForecastDaily.test.tsx
│   │       │   │   ├── __snapshots__
│   │       │   │   │   └── ForecastDaily.test.tsx.snap
│   │       │   │   └── response.json
│   │       │   └── index.ts
│   │       ├── Header
│   │       │   ├── Header.tsx
│   │       │   ├── __tests__
│   │       │   │   ├── Header.test.tsx
│   │       │   │   └── __snapshots__
│   │       │   │       └── Header.test.tsx.snap
│   │       │   └── index.ts
│   │       ├── SearchBox
│   │       │   ├── SearchBox.tsx
│   │       │   ├── __tests__
│   │       │   │   ├── SearchBox.test.tsx
│   │       │   │   └── __snapshots__
│   │       │   │       └── SearchBox.test.tsx.snap
│   │       │   └── index.ts
│   │       └── UnitSwitcher
│   │           ├── UnitSwitcher.tsx
│   │           ├── __tests__
│   │           │   ├── UnitSwitcher.test.tsx
│   │           │   ├── __snapshots__
│   │           │   │   └── UnitSwitcher.test.tsx.snap
│   │           │   ├── actions.test.ts
│   │           │   └── reducer.test.ts
│   │           ├── actions.ts
│   │           ├── index.ts
│   │           ├── reducer.ts
│   │           └── types.ts
│   ├── Views
│   │   ├── CurrentWeather
│   │   │   ├── CurrentWeather.tsx
│   │   │   ├── __tests__
│   │   │   │   ├── CurrentWeather.test.tsx
│   │   │   │   ├── __snapshots__
│   │   │   │   │   └── CurrentWeather.test.tsx.snap
│   │   │   │   ├── actions.test.ts
│   │   │   │   └── reducer.test.ts
│   │   │   ├── actions.ts
│   │   │   ├── index.ts
│   │   │   ├── reducer.ts
│   │   │   └── types.ts
│   │   ├── Drawer
│   │   │   ├── Drawer.tsx
│   │   │   ├── __tests__
│   │   │   │   ├── Drawer.test.tsx
│   │   │   │   └── __snapshots__
│   │   │   │       └── Drawer.test.tsx.snap
│   │   │   └── index.ts
│   │   ├── Forecast
│   │   │   ├── Forecast.tsx
│   │   │   ├── __tests__
│   │   │   │   ├── Forecast.test.tsx
│   │   │   │   ├── __snapshots__
│   │   │   │   │   └── Forecast.test.tsx.snap
│   │   │   │   ├── actions.test.ts
│   │   │   │   └── reducer.test.ts
│   │   │   ├── actions.ts
│   │   │   ├── index.ts
│   │   │   ├── reducer.ts
│   │   │   └── types.ts
│   │   └── Weather
│   │       ├── Weather.tsx
│   │       ├── __tests__
│   │       │   ├── Weather.test.tsx
│   │       │   └── __snapshots__
│   │       │       └── Weather.test.tsx.snap
│   │       └── index.ts
│   ├── constants
│   │   ├── a11y.ts
│   │   ├── fontawesome.d.ts
│   │   └── strings.ts
│   ├── hooks
│   │   ├── index.ts
│   │   ├── reducers.ts
│   │   ├── types.ts
│   │   ├── useApi.ts
│   │   ├── useApiHandler.ts
│   │   └── useLocation.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── reducer.ts
│   │   └── store.ts
│   ├── styles
│   │   └── colors.ts
│   └── utils
│       ├── index.ts
│       └── permission.ts
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```

## Implemented Functionality

- [x] Ask for geolocation pemission, detect the geolocation of the user device, and show the current weather and forecast.

  > This project uses [Weatherbit](https://www.weatherbit.io/) API as the data source. Unfortunately, [Weatherbit](https://www.weatherbit.io/) does not provide pollen/pollen count information.

- [x] Accessible for screen readers
- [x] Pulls the location weather from an API [Weatherbit](https://www.weatherbit.io/) for a list of public weather APIs that you could use)
- [x] Allows the user to switch between Imperial/Metric units
- [x] Allows the user to enter in a location name to look up

## Functionality Choices

- react-navigation for the drawer
- redux for global state management
- redux-persist as local store caching
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

- The API KEY that I put in .env is a free key for showing the usage of this test project only. In actual development, no API KEY should be stored on the client side, and no .env file should be committed.
- **[React Navigation](https://reactnavigation.org/)** is the most popular solution for navigation in React native. While the [Official React Navigation](https://reactnavigation.org/docs/en/getting-started.html) was just updated to 5.x, providing much better support for Typescript, the [Official React Native Guide - React Navigation](https://facebook.github.io/react-native/docs/navigation) was still for **React Navigation** 4.x, which would cause problem because in **[React Navigation 5.x](https://reactnavigation.org/)**, many packages are separated. Please always follow the [Official React Navigation](https://reactnavigation.org/docs/en/getting-started.html) documentation if you want to use the latest **[React Navigation](https://reactnavigation.org/)** version in your project
- The brand new **[React Navigation 5.x](https://reactnavigation.org/)** does not have good support for jest unit test yet. You have to mock many functions you used in your project by yourself. You could refer to my `./setupTests.js` for mock functions.
- The JavaScript build-in Date constructor behaves differently when using React Native debugger (v8 engine) and when not using the debugger (React Native on-device JavaScript Engine), which is an edge case

## Weather API Availability

The following Weather API are from [Github: public-apis](https://github.com/public-apis/public-apis#weather). All of them have no pollen/pollen count data.

| API                                                                    | Description                                                                                                                                                                                                                                  | Auth     | HTTPS | CORS    |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----- | ------- |
| [7Timer!](http://www.7timer.info/doc.php?lang=en)                      | Weather, especially for Astroweather. It is very old http API, and lacks many documentation                                                                                                                                                  | No       | No    | Unknown |
| [APIXU](https://www.apixu.com/doc/request.aspx)                        | Weather. _WeatherStack_. It has good documentation, but need to buy their \$50 professional plan for their 7-day forecast API data                                                                                                           | `apiKey` | Yes   | Unknown |
| [Dark Sky](https://darksky.net/dev/)                                   | Weather. First 1000 call free everyday, then 0.0001 per call. But they only support lat/long query, so you will need to do all the geolocation format conversion by yourself. Besides, they only have a few forecast fields and information. | `apiKey` | Yes   | No      |
| [MetaWeather](https://www.metaweather.com/api/)                        | Weather. They have very simple documentation mostly linked to Yahoo weather                                                                                                                                                                  | No       | Yes   | No      |
| [Meteorologisk Institutt](https://api.met.no/weatherapi/documentation) | Weather and climate data. Lack of documentation                                                                                                                                                                                              | No       | Yes   | Unknown |
| [NOAA Climate Data](https://www.ncdc.noaa.gov/cdo-web/)                | Weather and climate data. No forecast API found on their website                                                                                                                                                                             | `apiKey` | Yes   | Unknown |
| [ODWeather](http://api.oceandrivers.com/static/docs.html)              | Weather and weather webcams. no documentation. This one seems to be deprecated long time ago                                                                                                                                                 | No       | No    | Unknown |
| [OpenUV](https://www.openuv.io)                                        | Real-time UV Index Forecast. It is for UV information, no weather info.                                                                                                                                                                      | `apiKey` | Yes   | Unknown |
| [OpenWeatherMap](http://openweathermap.org/api)                        | Weather. A popular choice. I used it a lot in the past. But its free account only provides 5 days/3 hour forecast API. To use 16 days/daily forecast API, I will need to buy their Startup plan (\$40)                                       | `apiKey` | No    | Unknown |
| [Storm Glass](https://stormglass.io/)                                  | Global marine weather from multiple sources. No forecast. And its free account only allows 50 calls per day                                                                                                                                  | `apiKey` | Yes   | Yes     |
| [Weatherbit](https://www.weatherbit.io/api)                            | Weather. It was used in this project. They have 16-day forecast for their free plan.                                                                                                                                                         | `apiKey` | Yes   | Unknown |
| [Yahoo! Weather](https://developer.yahoo.com/weather/)                 | Weather. It was already retired in Feb 2019                                                                                                                                                                                                  | `apiKey` | Yes   | Unknown |
