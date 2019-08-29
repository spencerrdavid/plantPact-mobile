import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import {connect} from 'react-redux'

class ProductDetailsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Detailed product description</Text>
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
  text: {
    textAlign: "center"
  },
})

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(ProductDetailsScreen)
