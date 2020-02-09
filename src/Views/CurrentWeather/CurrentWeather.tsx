import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Config from 'react-native-config';

import CurrentWeatherMain from 'Components/CurrentWeatherMain';
import CurrentWeatherAdditional from 'Components/CurrentWeatherAdditional';
import { useLocation } from 'hooks/useLocation';
import { useApi } from 'hooks/useApi';
import { STRINGS } from 'constants/strings';
import { saveCurrent } from 'Views/CurrentWeather/actions';

const CurrentWeather = () => {
  const locationParam = useLocation();
  const { data, isLoading, isError } = useApi(
    Config.API_URL,
    STRINGS.apiEndpointCurrent,
    locationParam,
    !!locationParam
  );
  const dispatch = useDispatch();
  if (!isLoading && !isError && data) {
    dispatch(saveCurrent(data.data[0]));
  }

  return (
    <View style={styles.currentWeatherContainer}>
      <CurrentWeatherMain />
      <CurrentWeatherAdditional />
    </View>
  );
};

const styles = StyleSheet.create({
  currentWeatherContainer: { justifyContent: 'space-between' }
});

export default CurrentWeather;
