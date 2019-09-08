import React from 'react'
import { View, StyleSheet, Platform, Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { Button, Icon, SearchBar, Text } from 'react-native-elements'
import {connect} from 'react-redux'

import ProductList from '../components/ProductList'
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

const screenWidth = Dimensions.get('window').width
const os = Platform.select({
  ios: 'ios',
  android: 'android',
})

class SearchScreen extends React.Component {
  constructor(props) {
    super(props)
    this.productList = React.createRef()
  }

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
          break
        case 'chocolate':
          this.props.updateChocolate(data)
          break
        case 'flour':
          this.props.updateFlour(data)
          break
        case 'fruit':
          this.props.updateFruit(data)
          break
        case 'grains':
          this.props.updateGrains(data)
          break
        case 'nuts':
          this.props.updateNuts(data)
          break
        case 'pasta':
          this.props.updatePasta(data)
          break
      }
    }
    this.props.showProducts(this.props[category])
    this.productList.scrollToIndex(0)
  }

  handleSelectProduct = (product) => {
    this.productList.setSelectedCard(product.index)
    this.productList.scrollToIndex(product.index - 1)
  }

  showProductDetails = (product) => {
    this.props.navigation.push('Details', product)
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
        <View style={styles.center}>
          <Text>Search wholefoods</Text>
          <Button
            title="Nuts"
            type='outline'
            onPress={() => this.updateProducts('nuts')}
            titleStyle={{color: '#2b4116'}}
            buttonStyle={styles.button}
          />
          <Button
            title="Beans and pulses"
            type='outline'
            onPress={() => this.updateProducts('beans')}
            titleStyle={{color: '#2b4116'}}
            buttonStyle={styles.button}
          />
          <Button
            title="Pasta and rice"
            type='outline'
            onPress={() => this.updateProducts('pasta')}
            titleStyle={{color: '#2b4116'}}
            buttonStyle={styles.button}
          />
          <View style={styles.list}>
            <ProductList
              data={this.props.productsDisplayed}
              horizontal={true}
              onSelectProduct={this.handleSelectProduct}
              onSelectProductDetails={this.showProductDetails}
              ref={productList => {this.productList = productList}}
            />
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
  list: {
    height: 230,
    width: screenWidth,
  },
  button: {
    width: 200,
    backgroundColor: 'white',
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
