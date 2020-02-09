import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.settingIcon}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesomeIcon icon={faBars} size={18} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    justifyContent: 'center'
  },
  settingIcon: {
    marginLeft: 10
  }
});

export default Header;
