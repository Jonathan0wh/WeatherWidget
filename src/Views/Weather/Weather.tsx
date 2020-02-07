import React from 'react';
import { StyleSheet, View } from 'react-native';

import CurrentWeather from 'Views/CurrentWeather';
import Forecast from 'Views/Forecast';
import Header from 'Components/Shared/Header';

const Weather = () => (
  <View style={styles.screenContainer}>
    <Header />
    <View style={styles.mainContainer}>
      <View style={styles.currentWeatherContainer}>
        <CurrentWeather />
      </View>
      <View style={styles.forecastContainer}>
        <Forecast />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 20,
    flex: 1
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  currentWeatherContainer: {
    flex: 1,
    padding: 50
  },
  forecastContainer: {
    justifyContent: 'center',
    height: 180,
    paddingVertical: 25,
    marginVertical: 20
  }
});

export default Weather;
