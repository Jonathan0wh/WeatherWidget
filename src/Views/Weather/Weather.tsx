import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import CurrentWeather from 'Views/CurrentWeather';
import Forecast from 'Views/Forecast';
import Header from 'Components/Shared/Header';
import { COLORS } from 'styles/colors';
import { useLocation } from 'hooks/useLocation';
import { useDataApi } from 'hooks/useDataApi';
import { STRINGS } from 'constants/strings';
import { saveLocation } from './actions';
import { saveCurrent } from 'Views/CurrentWeather/actions';

const Weather = () => {
  const locationParam = useLocation();
  const [{ data }] = useDataApi(STRINGS.apiEndpointCurrent, locationParam);
  const dispatch = useDispatch();
  if (data) {
    dispatch(saveLocation(data.location));
    dispatch(saveCurrent(data.current));
  }

  return (
    <View style={styles.screenContainer}>
      <Header />
      <View style={styles.mainContainer}>
        <View style={styles.currentWeatherContainer}>
          <CurrentWeather />
        </View>
        <View style={styles.forecastContainer}>
          <Forecast />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 20,
    flex: 1
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  currentWeatherContainer: {
    flex: 1,
    padding: 50
  },
  forecastContainer: {
    justifyContent: 'center',
    height: 180,
    paddingVertical: 25,
    marginVertical: 20
  }
});

export default Weather;
