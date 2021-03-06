import { Alert } from 'react-native'
import * as Facebook from 'expo-facebook'
import { Google } from 'expo'

const FB_APP_ID = '672636582940821'
const iosClientId = '1094881163513-s302ht3ms3hb9mkdrutlrd0j3vd5he6i.apps.googleusercontent.com'
const androidClientId = '1094881163513-5vpqv1mnnu0vmokr0cv3hl5tkvjj4ic9.apps.googleusercontent.com'

// LOGIN FUNCTIONS
export const login = async (username, password) => {
  if (username === 'username' && password === 'password') {
    // fake token generation hack using mock API
    const response = await fetch('https://5d08006dfa0025001457863b.mockapi.io/listings')
    token = 'token123' + response._bodyBlob._data.blobId
    console.log('mock token: ')
    console.log(token)
    return token
  }
  const errMessage = 'Please try again'
  throw new Error(errMessage)
}

export const googleLogIn = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: androidClientId,
      iosClientId: iosClientId,
      scopes: ['profile', 'email'],
    })
    if (result.type === 'success') {
      let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${result.accessToken}` },
      })
      console.log(userInfoResponse)
      Alert.alert('Success!', `Hello, ${(await userInfoResponse.json()).name}`)
      console.log("Google token: ")
      console.log(result.accessToken)
      return result.accessToken
    }
  } catch (e) {
    Alert.alert("Google login error!")
    return { error: true }
  }
}

export const facebookLogIn = async () => {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
      permissions: ['public_profile'],
    })
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
      Alert.alert('Success!', `Hello, ${(await response.json()).name}`)
      console.log("Facebook token: ")
      console.log(token)
      return token
    }
  } catch ({ message }) {
    Alert.alert(`Facebook Login Error: ${message}`)
  }
}

// DATA FETCHING FUNCTIONS
export const getProductData = async (category) => {
  const url = 'https://demo7341159.mockable.io/' + category
  const response = await fetch(url)
  switch (category) {
    case 'beans':
      const {beans} = await response.json()
      return beans.map(processProducts)
    case 'chocolate':
      const {chocolate} = await response.json()
      return chocolate.map(processProducts)
    case 'flour':
      const {flour} = await response.json()
      return flour.map(processProducts)
    case 'fruit':
      const {fruit} = await response.json()
      return fruit.map(processProducts)
    case 'grains':
      const {grains} = await response.json()
      return grains.map(processProducts)
    case 'nuts':
      const {nuts} = await response.json()
      return nuts.map(processProducts)
    case 'pasta':
      const {pasta} = await response.json()
      return pasta.map(processProducts)
    default:
      return "error!"
  }
}

const processProducts = (product) => ({
  key: `${product.id}`,
  code: `${product.code}`,
  name: `${product.name}`,
  image: `${product.image}`,
  description: `${product.description}`,
  ingredients: `${product.ingredients}`,
  price: `${product.price}`,
})
