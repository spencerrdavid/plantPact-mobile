import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import { Text } from 'react-native-elements'

export default class ProductCard extends React.Component {

  state = {
    selected: false,
  }

  setSelected(key) {
    this.setState({selected: this.props.index === key})
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.onSelectProduct(this.props)}>
          <View style={this.state.selected ? styles.selectedCard : styles.card}>
            <View style={styles.imageContainer}>
              <Image source={{uri: this.props.image}} style={styles.image} />
            </View>
            <Text style={styles.text}>{this.props.name}</Text>
          </View>
        </TouchableOpacity>
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
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
  },
})
