import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Config from 'react-native-config';
import axios from 'axios';

import { COLORS } from 'styles/colors';
import { STRINGS } from 'constants/strings';
import { saveCurrent } from 'Views/CurrentWeather';
import { saveLocation } from 'Views/Weather';

const SearchBox = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  return (
    <TextInput
      style={styles.textInputStyle}
      placeholder={STRINGS.searchBoxPlaceHolder}
      value={value}
      onChangeText={text => setValue(text)}
      onSubmitEditing={() => {
        const url =
          Config.API_URL +
          '/' +
          STRINGS.apiEndpointCurrent +
          '?access_key=' +
          Config.ACCESS_KEY +
          '&query=' +
          value;
        axios
          .get(url)
          .then(response => {
            dispatch(saveLocation(response.data.location));
            dispatch(saveCurrent(response.data.current));
          })
          .catch(error => __DEV__ && console.log(error));
      }}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    width: 240,
    height: 30,
    backgroundColor: COLORS.white,
    padding: 4
  }
});

export default SearchBox;
