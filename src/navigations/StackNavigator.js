// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TravelRequestScreen from '../screens/travel-request/TravelRequestScreen';
import FlightListing from '../screens/flights/FlightsListing';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TravelRequestScreen">
        <Stack.Screen
          name="TravelRequestScreen"
          component={TravelRequestScreen}
        />
        <Stack.Screen name="FlightListing" component={FlightListing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
