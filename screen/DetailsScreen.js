import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
 } from 'react-native'
import {
  Header,
} from 'react-native-elements'

import cat from './../constant/catImage'
import background from './../constant/background'

export default class DetailsScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      statusImage: cat.idle,
      statusWord: 'idle',
    }
  }

  toggle() {
    if (this.state.statusWord == 'idle') {
      this.setState({
        statusImage: cat.run,
        statusWord: 'run',
      })
    } else if (this.state.statusWord == 'run') {
      this.setState({
        statusImage: cat.hurt,
        statusWord: 'hurt',
      })
    } else if (this.state.statusWord == 'hurt') {
      this.setState({
        statusImage: cat.dead,
        statusWord: 'dead',
      })
    } else {
      this.setState({
        statusImage: cat.idle,
        statusWord: 'idle',
      })
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          backgroundColor={'#12273B'}
          leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            onPress: () => this.props.navigation.goBack(),
          }}
          centerComponent={{ text: 'Forest', style: { color: '#fff' } }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ImageBackground
          style={style.container}
          source={background.forest}
          >
          <TouchableOpacity
            onPress= {() => this.toggle()}
            >
            <Image
              style={style.imagePosition}
              source={this.state.statusImage}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: -3,
  },
  imagePosition: {
    marginBottom: 25,
  },
})
