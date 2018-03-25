import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
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
      <View style={{flex: 1}}>
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={style.container}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/catnimate/run_cat.gif')}
            />
          </TouchableOpacity>
        </View>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
