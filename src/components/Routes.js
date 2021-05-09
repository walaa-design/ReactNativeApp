import React, { Component } from 'react';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} initial={true} />
    </Stack.Navigator>
  );
}
