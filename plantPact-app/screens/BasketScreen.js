import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

export default class BasketScreen extends React.Component {

  showProductDetails = () => {
    this.props.navigation.push('ProductDetails');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>These are the products</Text>
        <Text style={styles.text}>Search for a product</Text>
        <Button
          title="Show product details"
          onPress={this.showProductDetails}
          color="#2b4116"
        />
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
    textAlign: "center"
  }
});
