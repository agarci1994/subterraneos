import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


export default function Social() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/twitter.png")} />
      <Image style={styles.img} source={require("../assets/facebook.png")} />
      <Image style={styles.img} source={require("../assets/instagram.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: "30%",
    height: "30%",
    width: "30%",
  },
  img: {
    marginVertical: 20,
    width: "110%",
    height: "60%",
  },
  title: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  section: {
    textAlign: "right",
    marginRight: 20,
  },
  author: {
    fontSize: 20,
    fontStyle: "italic",
  },
  year: {
    textAlign: "right",
    marginRight: 20,
  },
  details: {
    padding: 30,
  },
  WebViewContainer: {
    marginTop: 40,
    width: "100%",
    height: 100,
  },
});
