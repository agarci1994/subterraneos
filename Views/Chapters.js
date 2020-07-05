import React, {Component} from "react";
import { Text, View, SafeAreaView , StyleSheet, Image, TouchableOpacity} from "react-native";

import Carousel from "react-native-snap-carousel";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          img: require("../assets/1.jpg"),
          title: "Desmitificando los años 20",
        },
        {
          img: require("../assets/2.png"),
          title: "La revolución industrial",
        },
        {
          img: require("../assets/3.jpg"),
          title: "La guerra del vietnam",
        },
        {
          img: require("../assets/4.jpg"),
          title: "Guerra civil",
        },
        {
          img: require("../assets/5.jpg"),
          title: "Luchas por los derechos LGTB",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <TouchableOpacity
      onPress={() => {}}
        style={{
          height: "100%",
          paddingBottom: 100,
          marginLeft: 25,
          marginRight: 35,
        }}
      >
        <Image style={styles.img} source={item.img} />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, paddingTop: 50 }}
      >
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={350}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
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
  carouselContainer:{

  }
});
