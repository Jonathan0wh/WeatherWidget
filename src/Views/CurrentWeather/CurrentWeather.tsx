import React from 'react';
import { View, StyleSheet } from 'react-native';

import CurrentWeatherMain from 'Components/CurrentWeatherMain';
import CurrentWeatherAdditional from 'Components/CurrentWeatherAdditional';

const CurrentWeather = () => (
  <View style={styles.currentWeatherContainer}>
    <CurrentWeatherMain />
    <CurrentWeatherAdditional />
  </View>
);

const styles = StyleSheet.create({
  currentWeatherContainer: { justifyContent: 'space-between' }
});

export default CurrentWeather;
