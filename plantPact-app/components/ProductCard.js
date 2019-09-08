import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

export default class ProductCard extends React.Component {

  state = {
    selected: false,
  }

  // setSelected(key) {
  //   this.setState({selected: this.props.index === key})
  // }

  render() {
    return (
      <View style={styles.container}>
          <View style={this.state.selected ? styles.selectedCard : styles.card}>
            <TouchableOpacity style={styles.imageContainer} activeOpacity={0.8} onPress={() => this.props.onSelectProduct(this.props)}>
              <Image source={{uri: this.props.image}} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoContainer} activeOpacity={0.8} onPress={() => this.props.onSelectDetails(this.props)}>
              <Text style={styles.text}>{this.props.name}</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  card: {
    width: 200,
    height: 200,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'white',
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
    borderRadius: 6,
    paddingBottom: 2,
  },
  selectedCard: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#2b4116',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'white',
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
    borderRadius: 6,
    paddingBottom: 2,
  },
  imageContainer: {
    width: 200,
    height: 140,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    overflow: 'hidden',
  },
  infoContainer: {
    width: 180,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
})
