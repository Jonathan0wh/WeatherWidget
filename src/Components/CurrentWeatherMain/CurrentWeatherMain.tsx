import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { COLORS } from 'styles/colors';
import { A11Y_LABELS } from 'constants/a11y';
import { RootState } from 'store/reducer';
import { STRINGS } from 'constants/strings';
import { nth, getFahrenheitFromCelsius } from 'utils';

const CurrentWeatherMain = () => {
  const location = useSelector((state: RootState) => state.location);
  const current = useSelector((state: RootState) => state.current);
  const celsius = useSelector((state: RootState) => state.unit.celsius);

  return (
    <View style={styles.mainWeatherContainer}>
      <Text
        style={styles.titleText}
        accessible
        accessibilityLabel={A11Y_LABELS.currentCity + location?.name}
        accessibilityRole="text"
      >
        {location?.name}
      </Text>
      <Text
        style={styles.infoText}
        accessible
        accessibilityLabel={A11Y_LABELS.currentDate + location?.localtime}
        accessibilityRole="text"
      >
        {location &&
          STRINGS.days[
            new Date(location.localtime.replace(' ', 'T')).getDay()
          ] + ', '}
        {location &&
          STRINGS.days[
            new Date(location.localtime.replace(' ', 'T')).getMonth()
          ]}{' '}
        {location && new Date(location.localtime.replace(' ', 'T')).getDay()}
        {location &&
          nth(new Date(location.localtime.replace(' ', 'T')).getDay())}
      </Text>
      <Text
        style={styles.infoText}
        accessible
        accessibilityLabel={
          A11Y_LABELS.currentWeather + current?.weather_descriptions
        }
        accessibilityRole="text"
      >
        {current?.weather_descriptions}
      </Text>
      <View style={styles.visualWeatherContainer}>
        <Image
          source={{
            uri: current?.weather_icons[0]
          }}
          style={styles.weatherIcon}
        />
        <Text
          style={[styles.titleText, styles.temperatureText]}
          accessible
          accessibilityLabel={
            A11Y_LABELS.currentTemperature + celsius
              ? current?.temperature + 'Celsius'
              : getFahrenheitFromCelsius(current?.temperature || 0) +
                'Farenheight'
          }
          accessibilityRole="text"
        >
          {celsius
            ? current?.temperature
            : getFahrenheitFromCelsius(current?.temperature || 0)}
        </Text>
        <Text style={[styles.infoText, styles.temperatureUnit]}>
          °{celsius ? 'C' : 'F'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWeatherContainer: {
    flex: 1
  },
  titleText: {
    fontSize: 36,
    color: COLORS.titleTextGrey
  },
  infoText: {
    fontSize: 16,
    color: COLORS.infoTextGrey
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
    paddingTop: 8
  },
  temperatureUnit: {
    paddingTop: 18
  }
});

export default CurrentWeatherMain;
