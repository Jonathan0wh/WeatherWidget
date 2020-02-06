/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { store } from 'store';
import WeatherView from 'Views/Weather';
import DrawerView from 'Views/Drawer';

declare var global: { HermesInternal: null | {} };

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={() => <DrawerView />}
        >
          <Drawer.Screen name="Home" component={WeatherView} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
