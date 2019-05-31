import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons"

import WelcomeScreen from "./screens/WelcomeScreen";
import BasketScreen from "./screens/BasketScreen"
import CheckoutScreen from "./screens/CheckoutScreen"
import ProductDetailsScreen from "./screens/ProductDetailsScreen"

const MainStack = createStackNavigator(
  {
    Basket: BasketScreen,
    ProductDetails: ProductDetailsScreen
  },
  {
    initialRouteName: "Basket"
  }
);

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={"ios-basket"}
      size={25}
      color={tintColor}
    />
  )
};

const MainTabs = createBottomTabNavigator(
  {
    Products: MainStack,
    Checkout: CheckoutScreen
  },
  {
    tabBarOptions: {
      activeTintColor: "#2b4116"
    }
  }
);

const AppNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Main: MainTabs
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {

  };

  render() {
    return (
      <AppContainer
        screenProps={{}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
