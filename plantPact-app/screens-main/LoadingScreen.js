import React from 'react'
import { StyleSheet, ActivityIndicator, StatusBar, View } from 'react-native'
import Constants from 'expo-constants'
import {connect} from 'react-redux'

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.setAuth()
  }

  setAuth = async () => {
    this.props.navigation.navigate(this.props.token ? 'Main' : 'Start')
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    flex: 1,
  },
})

const mapStateToProps = state => ({
  err: state.user.loginErr,
  token: state.user.token,
})

export default connect(mapStateToProps)(LoadingScreen)
