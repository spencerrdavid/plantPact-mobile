import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Ionicons } from '@expo/vector-icons'

import LoadingScreen from './screens-main/LoadingScreen'
import AlertsScreen from './screens-main/AlertsScreen'
import SearchScreen from './screens-main/SearchScreen'
import BasketScreen from './screens-main/BasketScreen'
import ProfileScreen from './screens-main/ProfileScreen'
import ProductDetailsScreen from './screens-main/ProductDetailsScreen'
import WelcomeScreen from './screens-login/WelcomeScreen'
import LoginScreen from './screens-login/LoginScreen'
import SignUpOptionsScreen from './screens-signUp/SignUpOptionsScreen'
import NameSignUpScreen from './screens-signUp/NameSignUpScreen'
import EmailSignUpScreen from './screens-signUp/EmailSignUpScreen'
import PreferencesSignUpScreen from './screens-signUp/PreferencesSignUpScreen'
import ProfileSignUpScreen from './screens-signUp/ProfileSignUpScreen'

import {store, persistor} from './redux/store'

const SearchStack = createStackNavigator(
  {
    Main: SearchScreen,
    Details: ProductDetailsScreen
  },
  {
    initialRouteName: 'Main',
    headerLayoutPreset: 'center',
  }
)

SearchStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={'ios-search'}
      size={25}
      color={tintColor}
    />
  )
}

const SignUpStack = createStackNavigator(
  {
    SignUpOptions: SignUpOptionsScreen,
    EmailSignUp1: NameSignUpScreen,
    EmailSignUp2: EmailSignUpScreen,
    PreferencesSignUp: PreferencesSignUpScreen,
    ProfileSignUp: ProfileSignUpScreen,
  },
  {
    initialRouteName: 'SignUpOptions',
    headerLayoutPreset: 'center',
  }
)

const WelcomeStack = createSwitchNavigator(
  {
    Welcome: WelcomeScreen,
    SignUp: SignUpStack,
  },
)

const MainTabs = createBottomTabNavigator(
  {
    Alerts: AlertsScreen,
    Search: SearchStack,
    Basket: BasketScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Search',
    headerLayoutPreset: 'center',
    tabBarOptions: {
      activeTintColor: '#2b4116',
    },
  }
)

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    headerLayoutPreset: 'center',
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Start: WelcomeStack,
    Logins: LoginStack,
    Main: MainTabs,
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store} >
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
    )
  }
}
