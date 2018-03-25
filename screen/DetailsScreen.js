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

export default class DetailsScreen extends React.Component {
  constructor() {
    super()
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
              source={require('../assets/images/catnimate/idle_cat.gif')}
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
