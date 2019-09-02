import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Constants from 'expo-constants'
import { Button, Icon, SearchBar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import {connect} from 'react-redux'

import {logOutUser} from '../redux/actions'

class ProfileScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={"md-person"}
        size={25}
        color={tintColor}
      />
    )
  }

  logOut = () => {
    console.log('token before logout: ')
    console.log(this.props.token)
    this.props.logOutUser()
    this.props.navigation.navigate('Start')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tempContainer}>
          {this.props.picture ?
            <View style={styles.imgContainer}>
              <Image source={this.props.picture} style={styles.img}/>
            </View>
            :
            <View style={styles.imgContainer}>
              <Image source={require('../assets/profile-picture-default.png')} style={styles.defaultImg} />
            </View>
          }
          <Button
            title="LOG OUT"
            type='outline'
            onPress={this.logOut}
            titleStyle={{color: '#2b4116', fontSize: 16}}
            buttonStyle={{width: 200, borderColor: 'white'}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempContainer: {
    height: 750,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
   width: 130,
   height: 130,
   resizeMode: 'contain',
   borderRadius: 10,
  },
  defaultImg: {
   width: 130,
   height: 130,
   resizeMode: 'contain',
  },
})

const mapStateToProps = state => ({
  token: state.user.token,
})

export default connect(mapStateToProps, {logOutUser})(ProfileScreen)
