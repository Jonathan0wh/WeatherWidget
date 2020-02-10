import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Config from 'react-native-config';

import Forecast from 'Views/Forecast';
import { saveCurrent } from './actions';
import Header from 'Components/Shared/Header';
import { RootState } from 'store/reducer';
import CurrentWeatherMain from 'Components/CurrentWeatherMain';
import CurrentWeatherAdditional from 'Components/CurrentWeatherAdditional';
import { useLocation, useApi } from 'hooks';
import { STRINGS } from 'constants/strings';

const Component = () => {
  const weather = useSelector((state: RootState) => state.current?.weather);

  let image;
  if (weather?.code) {
    let code = +weather.code;
    if (code >= 200 && code <= 233)
      image = require('./images/thunderstorm.png');
    else if (code >= 300 && code <= 302)
      image = require('./images/drizzle.png');
    else if (code >= 500 && code <= 522) image = require('./images/rain.png');
    else if (code >= 600 && code <= 623) image = require('./images/snow.png');
    else if (code >= 700 && code <= 751) image = require('./images/mist.png');
    else if (code >= 800 && code <= 804) image = require('./images/sunny.png');
    else image = require('./images/unknown.png');
  }

  return weather ? (
    <ImageBackground source={image} style={styles.screenBackgroundStyle}>
      <View style={styles.screenContainer}>
        <Header />
        <View style={styles.mainContainer}>
          <View style={styles.currentWeatherContainer}>
            <CurrentWeatherMain />
            <CurrentWeatherAdditional />
          </View>
          <View style={styles.forecastContainer}>
            <Forecast />
          </View>
        </View>
      </View>
    </ImageBackground>
  ) : (
    <View style={styles.screenContainer}>
      <Header />
      <View style={styles.mainContainer}>
        <View style={styles.currentWeatherContainer}>
          <CurrentWeatherMain />
          <CurrentWeatherAdditional />
        </View>
        <View style={styles.forecastContainer}>
          <Forecast />
        </View>
      </View>
    </View>
  );
};

const Container = () => {
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

  return <Component />;
};

const styles = StyleSheet.create({
  screenBackgroundStyle: {
    width: '100%',
    height: '100%'
  },
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
    justifyContent: 'space-between',
    padding: 50
  },
  forecastContainer: {
    justifyContent: 'center',
    height: 180,
    paddingVertical: 25,
    marginVertical: 20
  }
});

export default Container;
