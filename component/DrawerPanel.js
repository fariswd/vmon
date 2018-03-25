import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {
  Text,
  Divider,
  Button,
  Icon,
} from 'react-native-elements'

export default class DrawerPanel extends React.Component {
  render() {
    console.log(this.props.p)
    return (
      <View style={style.container}>
        <Divider style={{ backgroundColor: 'gray' }} />
        <View style={style.sectionTwo}>
          <TouchableOpacity
            onTouch={ () => this.props.p.navigation.navigate('Details')}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 10,
          }}>
            <View>
              <Icon
                name='user'
                type='font-awesome'
                color='white'
                size={30}
              />
            </View>
            <Text style={{color: 'white', fontSize: 22, paddingLeft: 5}}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C6DCC',
  },
  sectionOne: {
    height: 150,
    backgroundColor: '#3C6DCC',
  },
  sectionTwo: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 20,
  }
})
