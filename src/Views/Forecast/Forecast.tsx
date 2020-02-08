import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import ForecastDaily from 'Components/Shared/ForecastDaily';
import { COLORS } from 'styles/colors';
import { STRINGS } from 'constants/strings';
import { RootState } from 'store/reducer';
import { useApi } from 'hooks/useApi';
import { CurrentState } from 'Views/CurrentWeather/types';

const Forecast = () => {
  let forecastArray: Array<CurrentState> = [];

  const current = useSelector((state: RootState) => state.current);
  const [{ data, isLoading, isError }] = useApi(
    undefined,
    STRINGS.apiEndpointForecast,
    {
      lat: current?.lat,
      lon: current?.lon
    }
  );
  if (!isLoading && !isError && data) forecastArray = data.data.slice(0, 7);

  return forecastArray.length ? (
    <ScrollView
      contentContainerStyle={styles.forecastContainer}
      centerContent
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {forecastArray.map((dailyForecast, index) => (
        <ForecastDaily
          key={index}
          index={index}
          dailyForecast={dailyForecast}
        />
      ))}
    </ScrollView>
  ) : (
    <ActivityIndicator />
  );
};

const styles = StyleSheet.create({
  forecastContainer: {
    borderTopWidth: 0.5,
    borderTopColor: COLORS.infoTextGrey,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.infoTextGrey
  }
});

export default Forecast;
