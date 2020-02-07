import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { COLORS } from 'styles/colors';
import { A11Y_LABELS } from 'constants/a11y';
import { RootState } from 'store/reducer';

const CurrentWeatherAdditional = () => {
  const current = useSelector((state: RootState) => state.current);

  return (
    current && (
      <View>
        <View style={styles.rowContainer}>
          <Text
            style={styles.titleText}
            accessible
            accessibilityLabel={A11Y_LABELS.currentPrecipitation}
            accessibilityRole="text"
          >
            Precipitation:{' '}
          </Text>
          <Text
            style={styles.dataText}
            accessible
            accessibilityLabel={current.precip + 'mm/hr'}
            accessibilityRole="text"
          >
            {current.precip} mm/hr
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text
            style={styles.titleText}
            accessible
            accessibilityLabel={A11Y_LABELS.currentHumidity}
            accessibilityRole="text"
          >
            Humidity:{' '}
          </Text>
          <Text
            style={styles.dataText}
            accessible
            accessibilityLabel={current.rh + '%'}
            accessibilityRole="text"
          >
            {current.rh}%
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text
            style={styles.titleText}
            accessible
            accessibilityLabel={A11Y_LABELS.currenWind}
            accessibilityRole="text"
          >
            Wind:{' '}
          </Text>
          <Text
            style={styles.dataText}
            accessible
            accessibilityLabel={current.wind_spd + 'm/s' + current.wind_cdir}
            accessibilityRole="text"
          >
            {current.wind_spd} m/s {current.wind_cdir}
          </Text>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row'
  },
  titleText: {
    color: COLORS.infoTextGrey
  },
  dataText: {
    color: COLORS.titleTextGrey
  }
});

export default CurrentWeatherAdditional;
