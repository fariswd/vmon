import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from 'react-navigation'

import RootNavigation from './navigation/RootNavigation'

export default class App extends React.Component {
  render() {
    return (
      <RootNavigation />
    );
  }
}
