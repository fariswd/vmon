import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
 } from 'react-native'
import {
  Button,
  Header,
 } from 'react-native-elements';
import Drawer from 'react-native-drawer'

import DrawerPanel from './../component/DrawerPanel'
import cat from './../constant/catImage'
import background from './../constant/background'

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      statusImage: cat.idle,
      statusWord: 'idle',
    }
  }

  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

  toggle() {
    if (this.state.statusWord == 'idle') {
      this.setState({
        statusImage: cat.run,
        statusWord: 'run',
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
      <Drawer
        type="overlay"
        ref={(ref) => this._drawer = ref}
        content={<DrawerPanel p={this.props} />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        <View style={{flex: 1}}>
          <Header
            // leftComponent={{
            //   icon: 'menu',
            //   color: '#fff',
            //   onPress: () => this.openControlPanel(),
            // }}
            centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          />
          <ImageBackground
            style={style.container}
            source={background.mountain}
            >
            <TouchableOpacity
                onPress= {() => this.toggle()}
                // onPress= {() => this.props.navigation.navigate('Details')}
              >
              <Image
                style= {style.imagePosition}
                source={this.state.statusImage}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </Drawer>
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
  }
})

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
