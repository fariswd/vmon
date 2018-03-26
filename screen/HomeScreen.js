import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
 } from 'react-native'
import {
  Text,
  Button,
  Header,
 } from 'react-native-elements';
import Drawer from 'react-native-drawer'
import { Pedometer } from "expo";

import cat from './../constant/catImage'
import background from './../constant/background'

const { height, width } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      statusImage: cat.idle,
      statusWord: 'idle',
      pastStepCount: 0,
      currentStepCount: 0,
      showStep: false,
    }
  }

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
        delay: 0,
      });
      this.toggle()
      setTimeout(() => { this.toggle() }, 3000);
    });

    // const end = new Date();
    // const start = new Date();
    // start.setDate(end.getDate() - 1);
    // Pedometer.getStepCountAsync(start, end).then(
    //   result => {
    //     console.log(result.steps)
    //     this.setState({ pastStepCount: result.steps });
    //   },
    //   error => {
    //     this.setState({
    //       pastStepCount: "Could not get stepCount: " + error
    //     });
    //   }
    // );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  toggleVisibleStep() {
    if(this.state.showStep) {
      this.setState({
        showStep: false
      })
    } else {
      this.setState({
        showStep: true
      })
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          backgroundColor={'#42DEEB'}
          rightComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.navigate('Details'),
          }}
          // centerComponent={{ text: 'Home', style: { color: '#fff' } }}
        />
        <ImageBackground
          style={style.container}
          source={background.mountain}
          >
          <View style={{ position: 'absolute', paddingBottom: height/2 + 80}}>
            {!this.state.showStep ? null : <Text h1 style={style.stepCount}>{this.state.currentStepCount}</Text>}
          </View>
          <TouchableOpacity
            onPress={() => this.toggleVisibleStep()}
            >
            <Image
              style= {style.imagePosition}
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
  stepCount: {
    fontFamily: 'sans-serif-light',
    color: '#291936',
    fontSize: 60,
  }
})
