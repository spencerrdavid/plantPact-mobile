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
        <View style={{height: 5}}/>
        <View style={styles.infoBox}>
          <View style={styles.textBox}>
            <Text style={styles.title}>{this.props.navigation.getParam('description')}</Text>
            <View style={{height: 5}}/>
            <Text style={styles.text}>£{this.props.navigation.getParam('price')} per 500g</Text>
            <Text style={styles.text}>Ingredients: {this.props.navigation.getParam('ingredients')}</Text>
            <Text style={styles.text}>Product code: {this.props.navigation.getParam('code')}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: screenWidth - 10,
    height: 330,
    resizeMode: 'contain',
  },
  infoBox: {
    width: screenWidth - 40,
    borderWidth: 2,
    borderColor: '#2b4116',
    borderRadius: 6,
    backgroundColor : 'white',
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
    borderRadius: 6,
    paddingBottom: 2,
  },
  textBox: {
    padding: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {

  },
})

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(ProductDetailsScreen)
