import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Sections(props) {
  const navigation = useNavigation();
  const library = props.props.library;
  const type = props.props.type;
  return (
    <View style={styles.flex}>
      {library.map((item) => (
        <>
          <View style={type === "Música" ? styles.imgMusic : styles.imgBook}>
            <TouchableHighlight onPress={() => navigation.navigate("MoreInfo", {item, type})}>
              <Image style={styles.img} source={item.img} />
            </TouchableHighlight>
            <Text>{item.title}</Text>
          </View>
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    marginTop: 80,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imgBook: {
    height: 200,
    margin: 30,
    width: "30%",
  },
  imgMusic: {
    height: 120,
    margin: 30,
    width: "30%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  carouselContainer: {},
});
