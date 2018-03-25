import React from 'react'
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen'
import DetailsScreen from '../screen/DetailsScreen'

const RootNavigation = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: { header: null },
  },
});

export default RootNavigation
