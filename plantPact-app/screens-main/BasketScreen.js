import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Constants from 'expo-constants'
import { Button, Text } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import {connect} from 'react-redux'

class BasketScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={'ios-basket'}
        size={25}
        color={tintColor}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Finish and pay here</Text>
        <Text style={styles.text}>List of items in basket:</Text>
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
})

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(BasketScreen)
