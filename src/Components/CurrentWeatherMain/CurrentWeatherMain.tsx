import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { COLORS } from 'styles/colors';
import { A11Y_LABELS } from 'constants/a11y';
import { RootState } from 'store/reducer';
import { STRINGS } from 'constants/strings';
import { nth, getFahrenheitFromCelsius, getWeatherIconUri } from 'utils';

const CurrentWeatherMain = () => {
  const current = useSelector((state: RootState) => state.current);
  const celsius = useSelector((state: RootState) => state.unit.celsius);

  return (
    current && (
      <View style={styles.mainWeatherContainer}>
        <Text
          style={styles.titleText}
          accessible
          accessibilityLabel={A11Y_LABELS.currentCity + current.city_name}
          accessibilityRole="text"
        >
          {current.city_name}
        </Text>
        <Text
          style={styles.infoText}
          accessible
          accessibilityLabel={A11Y_LABELS.currentDate + current.ob_time}
          accessibilityRole="text"
        >
          {STRINGS.days[new Date().getDay()] + ', '}
          {STRINGS.months[new Date().getMonth()]} {new Date().getDate()}
          {nth(new Date().getDate())}
        </Text>
        <Text
          style={styles.infoText}
          accessible
          accessibilityLabel={
            A11Y_LABELS.currentWeather + current.weather.description
          }
          accessibilityRole="text"
        >
          {current.weather.description}
        </Text>
        <View style={styles.visualWeatherContainer}>
          <Image
            source={{
              uri: getWeatherIconUri(current.weather.icon)
            }}
            style={styles.weatherIcon}
          />
          <Text
            style={[styles.titleText, styles.temperatureText]}
            accessible
            accessibilityLabel={
              A11Y_LABELS.currentTemperature + celsius
                ? current.temp.toFixed(0) + 'Celsius'
                : getFahrenheitFromCelsius(current.temp) + 'Farenheight'
            }
            accessibilityRole="text"
          >
            {celsius
              ? current.temp.toFixed(0)
              : getFahrenheitFromCelsius(current.temp)}
          </Text>
          <Text style={[styles.infoText, styles.temperatureUnit]}>
            °{celsius ? 'C' : 'F'}
          </Text>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  mainWeatherContainer: {
    flex: 1
  },
  titleText: {
    fontSize: 36,
    color: COLORS.white,
    textShadowColor: COLORS.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  infoText: {
    fontSize: 16,
    color: COLORS.black,
    textShadowColor: COLORS.white,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  visualWeatherContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  weatherIcon: {
    width: 80,
    height: 80
  },
  temperatureText: {
    paddingTop: 16
  },
  temperatureUnit: {
    paddingTop: 22,
    color: COLORS.white,
    textShadowColor: COLORS.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
});

export default CurrentWeatherMain;
