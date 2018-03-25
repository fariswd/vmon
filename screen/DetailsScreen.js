import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
 } from 'react-native'
import {
  Header,
} from 'react-native-elements'

import cat from './../constant/catImage'

export default class DetailsScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      status: cat.idle
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          placement="left"
          leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            onPress: () => this.props.navigation.goBack(),
          }}
          centerComponent={{ text: 'Detail Screen', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={style.container}>
          <TouchableOpacity>
            <Image
              source={this.state.status}
            />
          </TouchableOpacity>
        </View>
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
