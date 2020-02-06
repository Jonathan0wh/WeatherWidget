import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import SearchBox from 'Components/Shared/SearchBox';
import UnitSwitcher from 'Components/Shared/UnitSwitcher';
import { COLORS } from 'styles/colors';

const Drawer = () => (
  <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
    <DrawerItem
      label={() => <SearchBox />}
      onPress={() => {}}
      style={styles.searchBoxWrapper}
    />
    <DrawerItem
      label={() => <UnitSwitcher />}
      onPress={() => {}}
      style={styles.unitSwitcherWrapper}
    />
  </DrawerContentScrollView>
);

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundLightGrey
  },
  searchBoxWrapper: {
    margin: 0
  },
  unitSwitcherWrapper: {
    alignItems: 'center'
  }
});

export default Drawer;
