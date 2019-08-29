import React from 'react'
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Button, Text, SocialIcon } from 'react-native-elements'
import {connect} from 'react-redux'

import {fbLoginAction} from '../redux/actions'
import {facebookLogIn} from '../api'

class WelcomeScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    header: null,
  })

  fbLogIn = async () => {
    const token = await facebookLogIn()
    await this.props.fbLoginAction(token)
    this.props.token && this.props.navigation.navigate('Main')
  }

  navigateToOptions = () => {
    this.props.navigation.push('SignUp')
  }

  navigateToLogin = () => {
    this.props.navigation.navigate('Logins')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
          <Text h3>Welcome to PlantPact</Text>
          <Text>Vegan wholefoods warehouse</Text>
        </View>
        <View style={styles.footer}>
          <SocialIcon
            title="Sign in with Facebook"
            button
            type='facebook'
            onPress={this.fbLogIn}
            style={{width: 250}}
          />
          <TouchableOpacity onPress={this.navigateToOptions}>
            <Text style={styles.options}>More Options</Text>
          </TouchableOpacity>
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
  banner: {
    flex: 0.35,
    width: Dimensions.get('window').width,
  },
  body: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: 200,
    resizeMode: 'contain',
  },
  options: {
    color: '#2b4116',
    textDecorationLine: 'underline',
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

const mapStateToProps = state => ({
  err: state.user.loginErr,
  token: state.user.token,
})

export default connect(mapStateToProps, {fbLoginAction})(WelcomeScreen)
