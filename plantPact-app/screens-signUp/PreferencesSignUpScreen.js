import React from 'react'
import { StyleSheet, View, ScrollView, Slider, Image, Platform, Dimensions } from 'react-native'
import { Text, Button, ButtonGroup, SearchBar } from 'react-native-elements'
import {connect} from 'react-redux'

const screenWidth = Dimensions.get('window').width

class PreferencesSignUpScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: "Sign up",
    headerBackTitle: null,
    headerLayoutPreset: 'center',
    headerTintColor: 'black',
  })

  handleSubmit = () => {
    this.props.navigation.navigate('ProfileSignUp')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="NEXT"
          onPress={this.handleSubmit}
          titleStyle={{color: 'white'}}
          buttonStyle={styles.button}
          containerStyle={{padding: 20}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    backgroundColor: '#2b4116',
  },
})

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(PreferencesSignUpScreen)
