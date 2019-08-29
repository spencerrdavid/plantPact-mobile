import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Button, Text, Input, SocialIcon } from 'react-native-elements'
import {connect} from 'react-redux'

import {fbLoginAction} from '../redux/actions'
import {googleLoginAction} from '../redux/actions'
import {facebookLogIn} from '../api'
import {googleLogIn} from '../api'

class SignUpOptionsScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    header: null,
    headerBackTitle: null,
    headerTintColor: 'black',
  })

  fbLogIn = async () => {
    const token = await facebookLogIn()
    await this.props.fbLoginAction(token)
    this.props.token && this.props.navigation.navigate('UserTypeSignUp')
  }

  googleLogIn = async () => {
    const token = await googleLogIn()
    await this.props.googleLoginAction(token)
    this.props.token && this.props.navigation.navigate('UserTypeSignUp')
  }

  emailSignUp = () => {
    this.props.navigation.push('EmailSignUp1')
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
          <Text h3>Sign up</Text>
          <SocialIcon
            title="Sign up with Facebook"
            button
            type='facebook'
            onPress={this.fbLogIn}
            style={{width: 250}}
          />
          <SocialIcon
            title="Sign up with Google"
            button
            type='google'
            onPress={this.googleLogIn}
            style={styles.google}
          />
        </View>
        <View style={styles.bottom}>
          <Button
            icon={{ name: 'email', size: 15, color: '#2b4116' }}
            title="   Sign up with Email"
            type='outline'
            onPress={this.emailSignUp}
            titleStyle={{color: '#2b4116'}}
            buttonStyle={styles.button}
          />
          <View style={styles.divider}/>
          <Text>Have an account?</Text>
          <TouchableOpacity onPress={this.navigateToLogin}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: 150,
    resizeMode: 'contain'
  },
  google: {
    width: 250,
    backgroundColor: '#fb5c4a',
  },
  divider: {
    width: 250,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
  },
  button: {
    width: 250,
    borderColor: '#2b4116',
    borderWidth: 1,
  },
  login: {
    color: '#2b4116',
  },
})

const mapStateToProps = state => ({
  err: state.user.loginErr,
  token: state.user.token,
})

export default connect(mapStateToProps, {fbLoginAction, googleLoginAction})(SignUpOptionsScreen)
