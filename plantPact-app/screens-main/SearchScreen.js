import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'
import { Button, Icon, SearchBar, Text } from 'react-native-elements'
import {connect} from 'react-redux'

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

})

export default connect(mapStateToProps)(SearchScreen)
