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

const categories = ['beans', 'nuts', 'flour', 'pasta', 'grains', 'fruit', 'chocolate']
const screenWidth = Dimensions.get('window').width
const os = Platform.select({
  ios: 'ios',
  android: 'android',
})

class SearchScreen extends React.Component {
  constructor(props) {
    super(props)
    this.loadData()
    this.productList = React.createRef()
  }

  static navigationOptions = ({navigation}) => ({
    header: null,
    headerBackTitle: null,
    headerTintColor: 'black',
  })

  state = {
    productList: '',
    search: '',
  }

  updateSearch = search => {
    this.setState({ search })
  }

  handleSearch = async () => {
    if (this.state.search !== '') {

    }
  }

  loadData = () => {
    categories.forEach(category => this.getData(category))
  }

  getData = async (category) => {
    switch (category) {
      case 'beans':
        const beans = await getProductData(category)
        this.props.updateBeans(beans)
        break
      case 'chocolate':
        const chocolate = await getProductData(category)
        this.props.updateChocolate(chocolate)
        break
      case 'flour':
        const flour = await getProductData(category)
        this.props.updateFlour(flour)
        break
      case 'fruit':
        const fruit = await getProductData(category)
        this.props.updateFruit(fruit)
        break
      case 'grains':
        const grains = await getProductData(category)
        this.props.updateGrains(grains)
        break
      case 'nuts':
        const nuts = await getProductData(category)
        this.props.updateNuts(nuts)
        break
      case 'pasta':
        const pasta = await getProductData(category)
        this.props.updatePasta(pasta)
        break
      default:
        return
    }
  }

  updateProducts = (category) => {
    if (this.state.productList.length > 0) {
      this.productList.scrollToIndex(0)
    }
    this.setState({productList: category})
  }

  handleSelectProduct = (product) => {
    // the next line causes a bug that crashes the app
    // this.productList.setSelectedCard(product.index)
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
          <View style={styles.buttons}>
            <Button
              title="Beans and pulses"
              type='outline'
              onPress={() => this.updateProducts('beans')}
              titleStyle={this.state.productList === 'beans' ? styles.selectedButtonText : styles.ButtonText}
              buttonStyle={styles.button}
            />
            <Button
              title="Nuts"
              type='outline'
              onPress={() => this.updateProducts('nuts')}
              titleStyle={this.state.productList === 'nuts' ? styles.selectedButtonText : styles.ButtonText}
              buttonStyle={styles.button}
            />
            <Button
              title="Flour"
              type='outline'
              onPress={() => this.updateProducts('flour')}
              titleStyle={this.state.productList === 'flour' ? styles.selectedButtonText : styles.ButtonText}
              buttonStyle={styles.button}
            />
            <Button
              title="Pasta and rice"
              type='outline'
              onPress={() => this.updateProducts('pasta')}
              titleStyle={this.state.productList === 'pasta' ? styles.selectedButtonText : styles.ButtonText}
              buttonStyle={styles.button}
            />
            <Button
              title="Grains"
              type='outline'
              onPress={() => this.updateProducts('grains')}
              titleStyle={this.state.productList === 'grains' ? styles.selectedButtonText : styles.ButtonText}
              buttonStyle={styles.button}
            />
            <Button
              title="Fruit"
              type='outline'
              onPress={() => this.updateProducts('fruit')}
              titleStyle={this.state.productList === 'fruit' ? styles.selectedButtonText : styles.ButtonText}
              buttonStyle={styles.button}
            />
            <Button
              title="Chocolate"
              type='outline'
              onPress={() => this.updateProducts('chocolate')}
              titleStyle={this.state.productList === 'chocolate' ? styles.selectedButtonText : styles.ButtonText}
              buttonStyle={styles.button}
            />
          </View>
          <View style={styles.list}>
            {this.state.productList === 'beans' &&
              <ProductList
                data={this.props.beans}
                horizontal={true}
                onSelectProduct={this.handleSelectProduct}
                onSelectProductDetails={this.showProductDetails}
                ref={productList => {this.productList = productList}}
              />
            }
            {this.state.productList === 'chocolate' &&
              <ProductList
                data={this.props.chocolate}
                horizontal={true}
                onSelectProduct={this.handleSelectProduct}
                onSelectProductDetails={this.showProductDetails}
                ref={productList => {this.productList = productList}}
              />
            }
            {this.state.productList === 'flour' &&
              <ProductList
                data={this.props.flour}
                horizontal={true}
                onSelectProduct={this.handleSelectProduct}
                onSelectProductDetails={this.showProductDetails}
                ref={productList => {this.productList = productList}}
              />
            }
            {this.state.productList === 'fruit' &&
              <ProductList
                data={this.props.fruit}
                horizontal={true}
                onSelectProduct={this.handleSelectProduct}
                onSelectProductDetails={this.showProductDetails}
                ref={productList => {this.productList = productList}}
              />
            }
            {this.state.productList === 'grains' &&
              <ProductList
                data={this.props.grains}
                horizontal={true}
                onSelectProduct={this.handleSelectProduct}
                onSelectProductDetails={this.showProductDetails}
                ref={productList => {this.productList = productList}}
              />
            }
            {this.state.productList === 'nuts' &&
              <ProductList
                data={this.props.nuts}
                horizontal={true}
                onSelectProduct={this.handleSelectProduct}
                onSelectProductDetails={this.showProductDetails}
                ref={productList => {this.productList = productList}}
              />
            }
            {this.state.productList === 'pasta' &&
              <ProductList
                data={this.props.pasta}
                horizontal={true}
                onSelectProduct={this.handleSelectProduct}
                onSelectProductDetails={this.showProductDetails}
                ref={productList => {this.productList = productList}}
              />
            }
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
  },
  buttons: {
    width: screenWidth - 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  list: {
    height: 230,
    width: screenWidth,
  },
  button: {
    height: 40,
    borderColor: 'white',
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#a9a9a9',
  },
  ButtonText: {
    color: '#2b4116'
  },
  selectedButtonText: {
    color: '#2b4116',
    fontWeight: 'bold'
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
