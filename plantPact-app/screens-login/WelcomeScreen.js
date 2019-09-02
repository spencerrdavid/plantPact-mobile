import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Button, Text } from 'react-native-elements'
import {connect} from 'react-redux'

export default class WelcomeScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    header: null,
  })

  navigateToOptions = () => {
    this.props.navigation.navigate('SignUp')
  }

  navigateToLogin = () => {
    this.props.navigation.navigate('Logins')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.middle}>
          <Text h3>Wholefoods warehouse</Text>
          <Button
            title="Get Started"
            type='outline'
            onPress={this.navigateToOptions}
            titleStyle={{color: '#2b4116'}}
            buttonStyle={styles.button}
          />
          <View style={{height: 100}}/>
        </View>
        <View style={styles.bottom}>
          <View style={styles.divider}/>
          <Text>Have an account?</Text>
          <TouchableOpacity onPress={this.navigateToLogin}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
          <View style={{height: 10}}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: 300,
    resizeMode: 'contain',
  },
  button: {
    width: 250,
    borderColor: '#2b4116',
    borderWidth: 1,
  },
  divider: {
    width: 200,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
  },
  login: {
    color: '#2b4116',
  },
})
