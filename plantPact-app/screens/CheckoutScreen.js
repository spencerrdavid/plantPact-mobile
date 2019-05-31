import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default class CheckoutScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={"ios-card"}
        size={25}
        color={tintColor}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Finish and pay here</Text>
        <Text style={styles.text}>List of items in basket:</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center",
    color: "#2b4116"
  }
});
