import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import Constants from 'expo-constants'
import { Button, Input, Text, SocialIcon } from 'react-native-elements'
import {connect} from 'react-redux'

import {fbLoginAction} from '../redux/actions'
import {googleLoginAction} from '../redux/actions'
import {facebookLogIn} from '../api'
import {googleLogIn} from '../api'
import {logInUser} from '../redux/actions'
import {clearErrorMessage} from '../redux/actions'

class LoginScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: "Welcome back!",
    headerBackTitle: null,
    headerTintColor: 'black',
    headerLeft: (
      <Button
        type='clear'
        icon={{name: 'close', size: 28, color: 'black'}}
        onPress={navigation.getParam('navigateToHome')}
        buttonStyle={styles.back}
      />
    ),
  })

  state = {
    email: '',
    password: '',
    isFormValid: false,
  }

  componentDidMount() {
    this.props.navigation.setParams({ navigateToHome: this.navigateToHome })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.email !== prevState.email ||
        this.state.password !== prevState.password)
    {
      this.validateForm()
    }
  }

  getHandler = key => val => {
    this.props.clearErrorMessage()
    this.setState({ [key]: val })
  }

  handleEmailChange = this.getHandler('email')
  handlePasswordChange = this.getHandler('password')

  validateForm = () => {
    if (this.state.email.length >= 6 &&
        this.state.password.length >= 6)
    {
      this.setState({ isFormValid: true })
    } else {
      this.setState({ isFormValid: false })
    }
  }

  fbLogIn = async () => {
    const token = await facebookLogIn()
    await this.props.fbLoginAction(token)
    this.props.token && this.props.navigation.navigate('Main')
  }

  googleLogIn = async () => {
    const token = await googleLogIn()
    await this.props.googleLoginAction(token)
    this.props.token && this.props.navigation.navigate('Main')
  }

  login = async () => {
    await this.props.logInUser(this.state.email, this.state.password)
    this.props.token && this.props.navigation.navigate('Main')
  }

  navigateToMain = () => {
    this.props.navigation.navigate('Main')
  }

  navigateToHome = () => {
    this.props.navigation.navigate('Start')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.top}>
          <SocialIcon
            title="Sign in with Facebook"
            button
            type='facebook'
            onPress={this.fbLogIn}
            style={{width: 250}}
          />
          <SocialIcon
            title="Sign in with Google"
            button
            type='google'
            onPress={this.googleLogIn}
            style={styles.google}
          />
          <Text style={styles.text}>Or</Text>
          <Input
            value={this.state.email}
            label="Email"
            textContentType='username'
            onChangeText={this.getHandler('email')}
            labelStyle={styles.label}
            containerStyle={styles.input}
            inputContainerStyle={{height: 25}}
            inputStyle={{fontSize: 18}}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Input
            value={this.state.password}
            label="Password"
            textContentType='password'
            onChangeText={this.getHandler('password')}
            labelStyle={styles.label}
            containerStyle={styles.input}
            inputContainerStyle={{height: 25}}
            inputStyle={{fontSize: 18}}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          <Text style={styles.error}> {this.props.err} </Text>
          <Button
            title="LOGIN"
            onPress={this.login}
            disabled={!this.state.isFormValid}
            titleStyle={{color: 'white'}}
            buttonStyle={styles.button}
          />
        </View>
        <View style={styles.bottomPadding}/>
      </KeyboardAvoidingView>
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
    alignItems: 'center',
  },
  back: {
    width: 50,
    backgroundColor: 'white',
    borderColor: 'white'
  },
  google: {
    width: 250,
    backgroundColor: '#fb5c4a',
  },
  text: {
    color: '#a9a9a9',
    fontWeight: 'bold',
  },
  label: {
    color: '#a9a9a9',
  },
  input: {
    width: 320,
    padding: 10,
  },
  button: {
    width: 350,
    backgroundColor: '#2b4116',
  },
  error: {
    color: '#2b4116',
    fontWeight: 'bold',
  },
  bottomPadding: {
    height: 80,
  }
})

const mapStateToProps = state => ({
  err: state.user.loginErr,
  token: state.user.token,
})

export default connect(mapStateToProps, {fbLoginAction, googleLoginAction, logInUser, clearErrorMessage})(LoginScreen)
