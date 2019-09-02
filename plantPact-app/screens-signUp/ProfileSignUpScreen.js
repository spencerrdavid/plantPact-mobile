import React from 'react'
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Picker } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { Button, Input, Text, Slider } from 'react-native-elements'
import {connect} from 'react-redux'

const screenWidth = Dimensions.get('window').width
const os = Platform.select({
  ios: 'ios',
  android: 'android',
})

class ProfileSignUpScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: "Profile",
    headerBackTitle: null,
    headerLayoutPreset: 'center',
    headerTintColor: 'black',
  })

  state = {
    picture: null,
  }

  pickImage = async () => {
    let {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status !== 'granted') {
      console.error("Image Permissions denied")
      return
    }
    let picture = await ImagePicker.launchImageLibraryAsync()
    this.setState({ picture })
  }

  getHandler = key => val => {
    this.setState({ [key]: val })
  }

  handleSubmit = () => {
    userDetails = {
      picture: this.state.picture,
    }
    // this.props.storeUserProfile(userDetails)
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={this.pickImage}>
            {
              this.state.picture ?
              <View style={styles.imgContainer}>
                <Image source={this.state.picture} style={styles.img}/>
                <Text style={styles.imgText}>You look great!</Text>
              </View>
              :
              <View style={styles.imgContainer}>
                <Image source={require('../assets/profile-picture-default.png')} style={styles.img} />
                <Text style={styles.imgText}>Add your picture</Text>
              </View>
            }
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Button
            title="SAVE"
            onPress={this.handleSubmit}
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
  },
  top: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
   width: 130,
   height: 130,
   resizeMode: 'contain',
  },
  imgText: {
    color: "#2b4116",
    padding: 10
  },
  text: {
    fontSize: 17,
    color: '#a9a9a9',
    fontWeight: 'normal',
  },
  button: {
    width: 250,
    backgroundColor: '#2b4116',
  },
})

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(ProfileSignUpScreen)
