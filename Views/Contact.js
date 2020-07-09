import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

// create a component
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      animValue: new Animated.Value(250),
    };
  }

  handleSelect = () => {
    this.state.animValue._value > 250
      ? Animated.timing(this.state.animValue, {
          toValue: 250,
          duration: 500,
        }).start()
      : Animated.timing(this.state.animValue, {
          toValue: 450,
          duration: 500,
        }).start();
  };

  renderRectangle = () => {
    let rotateAnimation = this.state.animValue.interpolate({
      inputRange: [250, 450],
      outputRange: ["0deg", "360deg"],
    });

    const customStyle = {
      height: this.state.animValue,
      transform: [{ rotate: rotateAnimation }],
    };

    return (
      <Animated.View style={[styles.rectangle, customStyle]}>
        <TouchableWithoutFeedback onPress={() => this.handleSelect()}>
          <View style={{ flex: 1, justifyContent:"center", backgroundColor:"#0aaaaff3" }}><Text style={styles.text}>Puedes contactar con nosotros en subterraneo@gmail.com</Text></View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  };

  render() {
    return <View style={styles.container}>{this.renderRectangle()}</View>;
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangle: {
    backgroundColor: "#2c3e50",
    width: 250,
  },
  text:{
    textAlign: "center",
    padding: 10,
    fontSize: 20, 
    fontWeight: "bold"
  }
});
