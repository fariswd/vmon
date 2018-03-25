import React from 'react'
import {
  Text,
  View,
 } from 'react-native'
import {
  Header,
} from 'react-native-elements'

export default class DetailsScreen extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View>
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
        <Text>This is Detail Screen</Text>
      </View>
    )
  }
}
