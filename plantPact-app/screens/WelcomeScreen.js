import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

export default class WelcomeScreen extends React.Component {
  start = () => {
    this.props.navigation.navigate("Main");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the welcome screen.</Text>
        <Button
          title="Take me to the wholefoods!"
          onPress={this.start}
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
