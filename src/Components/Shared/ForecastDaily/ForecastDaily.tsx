import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { COLORS } from 'styles/colors';
import { A11Y_LABELS } from 'constants/a11y';
import { STRINGS } from 'constants/strings';
import { RootState } from 'store/reducer';
import { getFahrenheitFromCelsius, getWeatherIconUri } from 'utils';
import { CurrentState } from 'Views/CurrentWeather/types';

interface ForecastDailyProps {
  index: number;
  dailyForecast: CurrentState;
}

const ForecastDaily = ({ index, dailyForecast }: ForecastDailyProps) => {
  const current = useSelector((state: RootState) => state.current);
  const celsius = useSelector((state: RootState) => state.unit.celsius);

  const dayIndex = current
    ? new Date(current.ob_time.replace(' ', 'T')).getDay()
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
          ? current &&
            STRINGS.days[
              dayIndex + index >= 7 ? dayIndex + index - 7 : dayIndex + index
            ]
          : 'Today'}
      </Text>
      <Image
        source={{
          uri: getWeatherIconUri(dailyForecast.weather.icon)
        }}
        style={styles.weatherIcon}
        accessible
        accessibilityLabel={A11Y_LABELS.forecastDailyWeather}
      />
      <View style={styles.rowContainer}>
        <Text style={styles.highTemperatureText}>
          {celsius
            ? dailyForecast.temp
            : getFahrenheitFromCelsius(dailyForecast.temp)}
          °
        </Text>
        {/* <Text style={styles.infoText}> 36°</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    padding: 10
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
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