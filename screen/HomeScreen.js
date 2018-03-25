import React from 'react'
import {
  Text,
  View,
  StyleSheet
 } from 'react-native'
import {
  Button,
  Header,
 } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View style={style.container}>
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Text>This is Home Screen</Text>
        <Button
          title= 'to detail'
          onPress= {() => this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
  }
})
