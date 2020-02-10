import React, { useState } from 'react';
import { StyleSheet, TextInput, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import Config from 'react-native-config';
import axios from 'axios';

import { COLORS } from 'styles/colors';
import { STRINGS } from 'constants/strings';
import { saveCurrent } from 'Views/Weather';

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
        const url = `${Config.API_URL}/${STRINGS.apiEndpointCurrent}?key=${Config.ACCESS_KEY}&city=${value}`;
        axios
          .get(url)
          .then(response => {
            dispatch(saveCurrent(response.data.data[0]));
          })
          .catch(error => {
            Alert.alert(
              STRINGS.LocationInputErrorTitle,
              STRINGS.LocationInputErrorMessage
            );
            __DEV__ && console.log(error);
          });
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
