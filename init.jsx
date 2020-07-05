import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./raices.png")} />
      <Text style={styles.text}>Subterráneos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "70%",
    height: "40%",
  },
  text:{
    fontSize: 25
  }
});
