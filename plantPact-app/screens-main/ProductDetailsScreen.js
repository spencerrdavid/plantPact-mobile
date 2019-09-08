import React from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import { Button, Text } from 'react-native-elements'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import {connect} from 'react-redux'

const screenWidth = Dimensions.get('window').width

class ProductDetailsScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('name'),
    headerBackTitle: null,
    headerTintColor: 'black',
  })

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.navigation.getParam('image')}} style={styles.image} />
        <Text style={styles.text}>{this.props.navigation.getParam('description')}</Text>
        <Text style={styles.text}>Price (/500g): £{this.props.navigation.getParam('price')}</Text>
        <Text style={styles.text}>{this.props.navigation.getParam('code')}</Text>
        <Text style={styles.text}>Ingredients: {this.props.navigation.getParam('ingredients')}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: screenWidth - 10,
    height: 400,
    resizeMode: 'contain',
  },
  text: {
    textAlign: "center"
  },
})

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(ProductDetailsScreen)
