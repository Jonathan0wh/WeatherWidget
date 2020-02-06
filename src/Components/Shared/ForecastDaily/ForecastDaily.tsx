import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { COLORS } from 'styles/colors';
import { A11Y_LABELS } from 'constants/a11y';
import { STRINGS } from 'constants/strings';
import { RootState } from 'store/reducer';
import { getFahrenheitFromCelsius } from 'utils';

interface ForecastDailyProps {
  index: number;
}

const ForecastDaily = ({ index }: ForecastDailyProps) => {
  const location = useSelector((state: RootState) => state.location);
  const celsius = useSelector((state: RootState) => state.unit.celsius);

  const dayIndex = location
    ? new Date(location.localtime.replace(' ', 'T')).getDay()
    : 0;

  return (
    <View
      style={styles.viewContainer}
      accessible
      accessibilityLabel={A11Y_LABELS.forecast}
      accessibilityRole="text"
    >
      <Text style={styles.dateText}>
        {index
          ? location &&
            STRINGS.days[
              dayIndex + index >= 7 ? dayIndex + index - 7 : dayIndex + index
            ]
          : 'Today'}
      </Text>
      <Image
        source={{
          uri:
            'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'
        }}
        style={styles.weatherIcon}
        accessible
        accessibilityLabel={A11Y_LABELS.forecastDailyWeather}
      />
      <View style={styles.rowContainer}>
        <Text style={styles.highTemperatureText}>
          {celsius ? 68 : getFahrenheitFromCelsius(68)}°
        </Text>
        <Text style={styles.infoText}> 36°</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    padding: 10
  },
  rowContainer: {
    flexDirection: 'row'
  },
  dateText: {
    fontWeight: 'bold'
  },
  infoText: {
    color: COLORS.infoTextGrey
  },
  highTemperatureText: {
    color: COLORS.titleTextGrey
  },
  weatherIcon: {
    width: 60,
    height: 60
  }
});

export default ForecastDaily;
