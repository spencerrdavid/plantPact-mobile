import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Button, CheckBox, Input } from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser'
import { Ionicons } from '@expo/vector-icons'
import {connect} from 'react-redux'

import {storeEmail} from '../redux/actions'

class EmailSignUpScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: "Sign up",
    headerBackTitle: null,
    headerTintColor: 'black',
  })

  state = {
    email: '',
    password: '',
    checked: false,
    isFormValid: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.email !== prevState.email ||
        this.state.password !== prevState.password ||
        this.state.checked !== prevState.checked)
    {
      this.validateForm()
    }
  }

  getHandler = key => val => {
    this.setState({ [key]: val })
  }

  validateForm = () => {
    if (this.state.email.length >= 6 &&
        this.state.password.length >= 6 &&
        this.state.checked)
    {
      this.setState({ isFormValid: true })
    } else {
      this.setState({ isFormValid: false })
    }
  }

  linkToTerms() {
    WebBrowser.openBrowserAsync('https://www.tumblr.com/policy/en/terms-of-service');
  }

  handleSubmit = () => {
    credentials = { email: this.state.email, password: this.state.password }
    this.props.storeEmail(credentials)
    this.props.navigation.push('PreferencesSignUp')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.form}>
          <Input
            value={this.state.email}
            label="Enter your email address"
            textContentType='emailAddress'
            labelStyle={styles.text}
            // errorMessage='Please enter a valid email address'
            // errorStyle={{color: '#2b4116'}}
            onChangeText={this.getHandler('email')}
            autoCapitalize='none'
            autoCorrect={false}
            autoCompleteType='email'
            containerStyle={styles.input}
          />
          <Input
            value={this.state.password}
            label="Create your password"
            labelStyle={styles.text}
            // errorMessage='Please enter a strong password'
            // errorStyle={{color: '#2b4116'}}
            onChangeText={this.getHandler('password')}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
            containerStyle={styles.input}
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={this.state.checked}
              containerStyle={styles.checkbox}
              onIconPress={() => this.setState({checked: !this.state.checked})}
              checkedColor='#2b4116'
            />
            <Text>I agree to the </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={this.linkToTerms}>
              <Text style={styles.terms}>Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
          <Button
            title="NEXT"
            onPress={this.handleSubmit}
            disabled={!this.state.isFormValid}
            titleStyle={{color: 'white'}}
            buttonStyle={styles.button}
            containerStyle={{padding: 20}}
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
    justifyContent: 'space-around',
  },
  form: {
    height: 200,
    alignItems: 'center',
  },
  text: {
    color: '#a9a9a9',
  },
  input: {
    width: 320,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30,
  },
  checkbox: {
    backgroundColor: 'white',
    borderColor: 'white'
  },
  terms: {
    color: '#2b4116'
  },
  button: {
    width: 250,
    backgroundColor: '#2b4116',
  },
  bottomPadding: {
    height: 20,
  }
})

const mapStateToProps = state => ({
  email: state.signUp.email,
  password: state.signUp.password,
})

export default connect(mapStateToProps, {storeEmail})(EmailSignUpScreen)
