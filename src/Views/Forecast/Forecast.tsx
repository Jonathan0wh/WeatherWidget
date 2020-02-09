import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ForecastDaily from 'Components/Shared/ForecastDaily';
import { COLORS } from 'styles/colors';
import { STRINGS } from 'constants/strings';
import { RootState } from 'store/reducer';
import { useApi } from 'hooks/useApi';
import { ForecastState } from './types';
import { saveForecast } from './actions';

const Forecast = () => {
  let forecast: ForecastState = [];

  const current = useSelector((state: RootState) => state.current);
  const { data, isLoading, isError } = useApi(
    undefined,
    STRINGS.apiEndpointForecast,
    {
      lat: current?.lat,
      lon: current?.lon
    }
  );
  const dispatch = useDispatch();
  if (!isLoading && !isError && data) {
    forecast = data.data.slice(0, 7);
    dispatch(saveForecast(forecast));
  }

  return forecast.length ? (
    <ScrollView
      contentContainerStyle={styles.forecastContainer}
      centerContent
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {forecast.map((dailyForecast, index) => (
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
