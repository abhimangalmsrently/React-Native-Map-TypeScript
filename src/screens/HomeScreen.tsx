import * as React from 'react';

import MapScreen from './MapScreen';
import LocationListScreen from './LocationListScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <Tab.Navigator>
        <Tab.Screen name = "Map View" component = {MapScreen} />
        <Tab.Screen name = "List View" component = {LocationListScreen} />
      </Tab.Navigator>
      
  );
}