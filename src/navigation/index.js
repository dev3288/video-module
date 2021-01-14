import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from '../screens';
import { navigationRef } from './navigation-service';

export const routes = {
  home: {
    screen: Home,
    routeName: 'home'
  },
}

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name={routes.home.routeName}
        component={routes.home.screen}
      />
    </HomeStack.Navigator>
  )
}

const AppContainer = () => {
    return (<NavigationContainer ref={navigationRef} >
      { <HomeNavigator /> }
    </NavigationContainer>)
}

export default AppContainer
