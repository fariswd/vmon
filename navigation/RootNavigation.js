import React from 'react'
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen'
import DetailsScreen from '../screen/DetailsScreen'

const RootNavigation = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null, tabBarVisible: false },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: { header: null, tabBarVisible: false },
  },
});

export default RootNavigation
