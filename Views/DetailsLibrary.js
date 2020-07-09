import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function DetailsLibrary({ props: { item, type } }) {
  console.log(item);
  return (
    <View>
      <Image style={styles.img} source={item.img} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.year}>{item.year}</Text>
          {item.details && <Text style={styles.details}>{item.details}</Text>}
    </View>
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
