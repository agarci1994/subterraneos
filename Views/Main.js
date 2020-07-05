import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Main() {
  const navigation = useNavigation();
  return (
    <>
      <View style={[styles.flex, styles.header]}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#f9f9fc"
          onPress={() => navigation.navigate("Info")}
          style={[styles.imageContainer, styles.button1]}
        >
          <Image style={styles.icon} source={require("../assets/ayuda.png")} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#f9f9fc"
          onPress={() => navigation.navigate("Profile")}
          style={[styles.imageContainer, styles.button2]}
        >
          <Image
            style={styles.icon}
            source={require("../assets/usuario.png")}
          />
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#f9f9fc"
        onPress={() => navigation.navigate("Chapters")}
        style={styles.buttonCenter}
      >
        <Image style={styles.img} source={require("../assets/raices.png")} />
      </TouchableHighlight>
      <Text style={styles.text}>Subterráneos</Text>
      <View style={[styles.flex, styles.footer]}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#f9f9fc"
          onPress={() => navigation.navigate("Social")}
          style={[styles.imageContainer, styles.button3]}
        >
          <Image
            style={styles.icon}
            source={require("../assets/compartir.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#f9f9fc"
          onPress={() => navigation.navigate("Email")}
          style={[styles.imageContainer, styles.button4]}
        >
          <Image style={styles.icon} source={require("../assets/email.png")} />
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 40,
    height: "50%",
    borderRadius: 100,
  },
  buttonCenter: {
    marginLeft: 70,
    height: "40%",
    width: "70%",
    borderRadius: 100,
  },
  img: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    marginLeft: 130,
    fontSize: 25,
  },
  icon: {
    padding: 40,
    alignSelf: "center",
    marginTop: 25,
    width: "30%",
    height: "65%",
  },
  flex: {
    flex: 1,
    flexDirection: "row",
  },
  button1: {
    flex: 1,
    alignSelf: "flex-start",
  },
  button2: {
    flex: 1,
    alignSelf: "flex-start",
  },
  button3: {
    flex: 1,
    alignSelf: "flex-start",
  },
  button4: {
    flex: 1,
    alignSelf: "flex-start",
  },
  header: {
    justifyContent: "space-between",
    flex: 1,
    alignSelf: "stretch",
  },
  footer: {
    justifyContent: "space-between",
    flex: 1,
    alignSelf: "stretch",
  },
});
