import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Details({ img, title, library }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { img, title, library })}
      style={{
        height: "100%",
        paddingBottom: 100,
        marginLeft: 25,
        marginRight: 35,
      }}
    >
      <Image style={styles.img} source={img} />
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 200,
    width: "8%",
  },
  img: {
    width: "130%",
    height: "100%",
  },
  carouselContainer: {},
});
