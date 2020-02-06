import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store/reducer';
import { COLORS } from 'styles/colors';
import { toggleUnit } from './actions';

const UnitSwitcher = () => {
  const celsius = useSelector((state: RootState) => state.unit.celsius);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(toggleUnit())}>
      <View style={styles.viewContainer}>
        <Text style={celsius && styles.whiteText}>°C</Text>
        <Text> / </Text>
        <Text style={!celsius && styles.whiteText}>°F</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row'
  },
  whiteText: {
    color: COLORS.white
  }
});

export default UnitSwitcher;
