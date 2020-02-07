import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ForecastDaily from 'Components/Shared/ForecastDaily';
import { COLORS } from 'styles/colors';
import { STRINGS } from 'constants/strings';
import { RootState } from 'store/reducer';
import { useDataApi } from 'hooks/useDataApi';
import { saveForecast } from './actions';
import { CurrentState } from 'Views/CurrentWeather/types';

const Forecast = () => {
  let forecastArray: Array<CurrentState> = [];

  const current = useSelector((state: RootState) => state.current);
  const [{ data, isLoading, isError }] = useDataApi(
    STRINGS.apiEndpointForecast,
    {
      lat: current?.lat,
      lon: current?.lon
    },
    current
  );
  const dispatch = useDispatch();
  if (!isLoading && !isError && data) {
    forecastArray = data.data.slice(0, 7);
    dispatch(saveForecast(forecastArray));
  }

  return (
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
