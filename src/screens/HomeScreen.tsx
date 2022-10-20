import * as React from 'react';

import MapScreen from './MapScreen';
import LocationListScreen from './LocationListScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../utils/Colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: Colors.deselectColor,
        tabBarActiveTintColor: Colors.selectedColor
      }}>
        <Tab.Screen name = "Map View" component = {MapScreen} />
        <Tab.Screen name = "List View" component = {LocationListScreen} />
      </Tab.Navigator>
      
  );
}