import React from "react";
import { StyleSheet, View, Text, Image, } from "react-native";
import { WebView } from "react-native-webview";

export default function DetailsLibrary({ props: { item, type } }) {
  console.log(item);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={item.img} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.section}>de <Text style={styles.author}>{item.author}</Text></Text>
          <Text style={styles.year}>{item.year}</Text>
          {item.details && <Text style={styles.details}>{item.details}</Text>}
          {item.music && <WebView
              style={styles.WebViewContainer}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: item.music }}
          />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
height: "100%"
  },
  img: {
    width: "100%",
    height: "50%",
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
  WebViewContainer:{
      marginTop: 40,
      width: "100%",
      height: 100
  }
});
