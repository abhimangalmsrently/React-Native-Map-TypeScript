import React, { Component } from 'react';

import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';
import LocationListScreen from './screens/LocationListScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { configureStore, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react'

const Stack = createNativeStackNavigator();

export default class App extends Component {

  // navigator.geolocation = require('@react-native-community/geolocation');

  render() {
    return (
      <Provider store={configureStore}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen name="MapScreen" component={MapScreen} />

              <Stack.Screen
                name="LocationListScreen"
                component={LocationListScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
