import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import ForecastDaily from 'Components/Shared/ForecastDaily';
import { COLORS } from 'styles/colors';

const Forecast = () => {
  const mockData = [{}, {}, {}, {}, {}, {}, {}];

  return (
    <ScrollView
      contentContainerStyle={styles.forecastContainer}
      centerContent
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {mockData.map((value, index) => (
        <ForecastDaily key={index} index={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  forecastContainer: {
    borderTopWidth: 0.5,
    borderTopColor: COLORS.white,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.white
  }
});

export default Forecast;
