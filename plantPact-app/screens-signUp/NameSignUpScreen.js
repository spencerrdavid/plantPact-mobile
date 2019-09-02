import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { Button, Input } from 'react-native-elements'
import {connect} from 'react-redux'

import {storeNames} from '../redux/actions'

class NameSignUpScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: "Sign up",
    headerBackTitle: null,
    headerTintColor: 'black',
  })

  state = {
    firstName: '',
    lastName: '',
    isFormValid: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.firstName !== prevState.firstName ||
        this.state.lastName !== prevState.lastName)
    {
      this.validateForm()
    }
  }

  getHandler = key => val => {
    this.setState({ [key]: val })
  }

  validateForm = () => {
    if (this.state.firstName.length >= 3 &&
        this.state.lastName.length >= 3)
    {
      this.setState({ isFormValid: true })
    } else {
      this.setState({ isFormValid: false })
    }
  }

  handleSubmit = () => {
    names = { firstName: this.state.firstName, lastName: this.state.lastName }
    this.props.storeNames(names)
    this.props.navigation.push('EmailSignUp2')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.form}>
          <Input
            value={this.state.firstName}
            label="First name"
            textContentType='name'
            autoCompleteType='name'
            labelStyle={styles.text}
            onChangeText={this.getHandler('firstName')}
            autoCorrect={false}
            containerStyle={styles.input}
          />
          <Input
            value={this.state.lastName}
            label="Last name"
            textContentType='name'
            autoCompleteType='name'
            labelStyle={styles.text}
            onChangeText={this.getHandler('lastName')}
            autoCorrect={false}
            containerStyle={styles.input}
          />
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
  button: {
    width: 250,
    backgroundColor: '#2b4116',
  },
  bottomPadding: {
    height: 20,
  }
})

const mapStateToProps = state => ({
  firstName: state.signUp.firstName,
  lastName: state.signUp.lastName,
})

export default connect(mapStateToProps, {storeNames})(NameSignUpScreen)
