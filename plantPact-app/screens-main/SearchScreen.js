import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'
import { Button, Icon, SearchBar, Text } from 'react-native-elements'
import {connect} from 'react-redux'

import {getProductData} from '../api'
import {
  updateBeans,
  updateChocolate,
  updateFlour,
  updateFruit,
  updateGrains,
  updateNuts,
  updatePasta,
  showProducts,
} from '../redux/actions'

const os = Platform.select({
  ios: 'ios',
  android: 'android',
})

class SearchScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    header: null,
    headerBackTitle: null,
    headerTintColor: 'black',
  })

  state = {
    search: '',
  }

  updateSearch = search => {
    this.setState({ search })
  }

  handleSearch = async () => {
    if (this.state.search !== '') {

    }
  }

  updateProducts = async (category) => {
    if (this.props[category].length === 0) {
      const data = await getProductData(category)
      switch (category) {
        case 'beans':
          this.props.updateBeans(data)
        case 'chocolate':
          this.props.updateChocolate(data)
        case 'flour':
          this.props.updateFlour(data)
        case 'fruit':
          this.props.updateFruit(data)
        case 'grains':
          this.props.updateGrains(data)
        case 'nuts':
          this.props.updateNuts(data)
        case 'pasta':
          this.props.updatePasta(data)
      }
    }
    this.props.showProducts(this.props[category])
  }

  showProductDetails = () => {
    this.props.navigation.push('Details', {search: this.state.search})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={this.state.search}
            platform={os}
            returnKeyType="search"
            onSubmitEditing={this.handleSearch}
          />
        </View>
        <Button
          title="Nuts"
          type='outline'
          onPress={() => this.updateProducts('nuts')}
          titleStyle={{color: 'white'}}
          buttonStyle={styles.button}
        />
        <Button
          title="Beans and pulses"
          type='outline'
          onPress={() => this.updateProducts('beans')}
          titleStyle={{color: 'white'}}
          buttonStyle={styles.button}
        />
        <Button
          title="Pasta and rice"
          type='outline'
          onPress={() => this.updateProducts('pasta')}
          titleStyle={{color: 'white'}}
          buttonStyle={styles.button}
        />
        <View style={styles.center}>
          <Text h3 h3Style={styles.title}>Search wholefoods</Text>
          <Button
            title="Product details"
            onPress={this.showProductDetails}
            titleStyle={{color: 'white'}}
            buttonStyle={styles.button}
            containerStyle={{padding: 20}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  searchBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 250,
  },
  title: {
    textAlign: 'center',
  },
  button: {
    width: 250,
    backgroundColor: '#2b4116',
  },
})

const mapStateToProps = state => ({
  beans: state.data.beans,
  chocolate: state.data.chocolate,
  flour: state.data.flour,
  fruit: state.data.fruit,
  grains: state.data.grains,
  nuts: state.data.nuts,
  pasta: state.data.pasta,
  productsDisplayed: state.data.productsDisplayed,
})

export default connect(mapStateToProps, {
  updateBeans,
  updateChocolate,
  updateFlour,
  updateFruit,
  updateGrains,
  updateNuts,
  updatePasta,
  showProducts,
})(SearchScreen)
